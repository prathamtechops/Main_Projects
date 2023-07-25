import { useState } from "react";
import { auth, firestore, storage } from "../../firebaseData";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

const SignUp = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            // Create user with email and password
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            // Store additional user information in Firestore
            const userDocRef = firestore.collection("users").doc(user.uid);
            const userData = {
                name,
                username,
                email,
                password,
            };
            await userDocRef.set(userData);
            // Upload profile image to Firebase Storage

            // Get profile image URL
            if (profileImage) {
                const storageRef = storage.ref();
                const imageRef = storageRef.child(`profileImages/${user.uid}`);
                await imageRef.put(profileImage);
                const imageURL = await imageRef.getDownloadURL();
                userData.profileImageURL = imageURL;
                await userDocRef.set(userData);
            }

            // Update user profile with profile image URL

            console.log("User signed up successfully!");
            // Optionally, you can handle additional logic after successful sign-up

            // Reset form inputs
            setName("");
            setUsername("");
            setEmail("");
            setPassword("");
            setProfileImage(null);
            setErrorMessage("");
            navigate("/");
        } catch (error) {
            console.error("Error signing up:", error.message);
            setErrorMessage(error.message);
        }
    };

    return (
        <SignUpForm
            handleSignUp={handleSignUp}
            name={name}
            handleNameChange={handleNameChange}
            username={username}
            handleUsernameChange={handleUsernameChange}
            email={email}
            handleEmailChange={handleEmailChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            errorMessage={errorMessage}
        />
    );
};

export default SignUp;
