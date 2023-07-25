import { useState } from "react";
import { Avatar } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const UploadPhoto = () => {
    const [photo, setPhoto] = useState(null);

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        setPhoto(URL.createObjectURL(file));
        // You can perform further operations with the selected file here
    };

    return (
        <div className="mb-4">
            <label
                htmlFor="profileImage"
                className="block mb-2 font-medium text-gray-700"
            >
                Profile Image
            </label>
            {photo ? (
                <div>
                    <Avatar
                        src={photo}
                        style={{
                            width: "100px",
                            height: "100px",
                        }}
                    />
                </div>
            ) : null}
            <div className="flex justify-between mt-3 ">
                <div className="flex items-center">
                    <label
                        htmlFor="profileImage"
                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        Select Image
                    </label>
                </div>
            </div>
            <input
                type="file"
                id="profileImage"
                onChange={handleProfileImageChange}
                className="hidden"
            />
        </div>
    );
};
