/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import userStore from "../../store/userState";
import { auth, firestore, storage } from "../../firebaseData";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const setUser = userStore((state) => state.login);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic form validation
        if (username.trim() === "" || password.trim() === "") {
            setErrorMessage("Please enter both username and password.");
            return;
        }

        try {
            const userSnapshot = await firestore.collection("users").get();
            const userDocs = userSnapshot.docs;
            const matchingUser = userDocs.find((userDoc) => {
                const userData = userDoc.data();
                return (
                    (userData.email === username ||
                        userData.username === username) &&
                    userData.password === password
                );
            });
            // Retrieve the profile image URL from Firebase Storage
            const profileImageRef = storage.ref(
                `profileImages/${matchingUser.id}`
            );
            const profileImageURL = await profileImageRef.getDownloadURL();

            if (!matchingUser) {
                setErrorMessage("Invalid email or username");
                return;
            }

            console.log("Username:", username);
            console.log("Password:", password);
            console.log("Email:", matchingUser.data().email);
            console.log("Name:", matchingUser.data().name);
            console.log("Profile image URL:", profileImageURL);

            // Sign in with email and password
            await auth.signInWithEmailAndPassword(
                matchingUser.data().email,
                password
            );

            setUser(
                matchingUser.data().name,
                matchingUser.data().email,
                username,
                password,
                profileImageURL
            );
            setUsername("");
            setPassword("");
            setErrorMessage("");
        } catch (error) {
            console.error("Error logging in:", error.message);
            setErrorMessage("Failed to log in. Please check your credentials.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full flex flex-col sm:w-2/3 md:w-1/2 lg:w-1/3"
            >
                <div className="p-2 mb-9 w-64 m-auto ">
                    <img
                        src="https://cdn.cdnlogo.com/logos/i/91/instagram.svg"
                        alt=""
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username or Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50"
                    />
                </div>
                {errorMessage && (
                    <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                )}

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 w-full bg-blue-500 text-white rounded font-bold hover:bg-blue-600"
                    >
                        Log In
                    </button>
                </div>
            </form>
            <p className="mt-2 text-center bg-white p-6 rounded shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                Don't have an account? {""}
                <Link to="/signup" className="text-blue-400 font-bold">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;
