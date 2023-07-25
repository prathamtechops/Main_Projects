import { Avatar, Button } from "@mui/material";
import userStore from "../store/userState";
import { useEffect, useState } from "react";
import { firestore, auth } from "../firebaseData";

const Settings = () => {
    const user = userStore((state) => state.user);

    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        // Get the current user ID
        const userId = auth.currentUser.uid;
        setUserId(userId);
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const onSubmit = async () => {
        try {
            await firestore.collection("users").doc(userId).update({
                name: name,
                username: username,
            });

            userStore.setState((state) => ({
                user: {
                    ...state.user,
                    name: name,
                    username: username,
                },
            }));
            setName(name);
            setUsername(username);
            console.log("Profile updated successfully!");
        } catch (err) {
            console.error("Error updating profile:", err);
            // Add your error handling logic here, such as displaying an error message to the user
        }
    };

    return (
        <div className=" w-full h-full p-5">
            <div className="flex justify-between items-center w-full h-16 px-5">
                <h1 className="text-2xl font-semibold">Settings</h1>
            </div>

            <div className="flex flex-col p-10 border-solid border-2 border-gray-700 ">
                <h2>Edit Profile </h2>
                <div className="p-9">
                    <div className="flex  gap-5 justif align-center mb-7">
                        <Avatar
                            src={user.profileImageURL}
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                        />
                        <div className=" flex flex-col flex-start  ">
                            <p className="ml-1">{user.username}</p>
                            <Button variant="text" color="primary" size="small">
                                Change Photo
                            </Button>
                        </div>
                    </div>

                    <div className="flex  gap-12 align-center mb-9 ">
                        <label className="text-sm mt-3">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="border-solid border-2 bg-black border-gray-700 rounded-md p-2"
                        />
                    </div>

                    <div className="flex  gap-5 align-center ">
                        <label className="text-sm mt-3">Username</label>
                        <input
                            type="text"
                            className="border-solid border-2 bg-black border-gray-700 rounded-md p-2"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>

                    <div className="flex  gap-5 align-center mt-7 ">
                        <Button
                            variant="text"
                            color="primary"
                            size="small"
                            onClick={onSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
