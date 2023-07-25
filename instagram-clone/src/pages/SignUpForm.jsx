/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { UploadPhoto } from "./UploadPhoto";

export function SignUpForm({
    handleSignUp,
    name,
    handleNameChange,
    username,
    handleUsernameChange,
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    errorMessage,
}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <form
                onSubmit={handleSignUp}
                className="bg-white p-8 rounded shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3"
            >
                {/* Form fields */}
                <div className="flex flex-col  justify-center align-center">
                    <div className="p-2 mb-6 w-64 m-auto ">
                        <img
                            src="https://cdn.cdnlogo.com/logos/i/91/instagram.svg"
                            alt=""
                        />
                    </div>

                    <h2 className="mx-5 mb-5 ml-9 font-medium text-gray-500 ">
                        Sign up to see photos and videos from your friends.
                    </h2>

                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Username"
                            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-50"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email"
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
                    {/* Error message */}
                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-4">
                            {errorMessage}
                        </p>
                    )}
                    {/* Sign up button */}
                    <UploadPhoto />
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-4 py-2 w-full bg-blue-500 text-white rounded font-bold hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
            <p className="mt-2 text-center bg-white p-6 rounded shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                Already have an account? {""}
                <Link to="/" className="text-blue-400 font-bold">
                    Login
                </Link>
            </p>
        </div>
    );
}
