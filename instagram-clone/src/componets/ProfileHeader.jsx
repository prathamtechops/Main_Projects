import { Avatar } from "@mui/material";

export function ProfileHeader() {
    return (
        <div className="flex  justify-between align-center ">
            {/* Profile Img and name */}
            <div className="flex ">
                <div>
                    <Avatar
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />
                </div>
                <div className="ml-5">
                    <h3>Username</h3>{" "}
                    <p className=" text-gray-400 text-sm ">Name</p>
                </div>
            </div>
            <p className=" text-blue-500 mt-2  text-sm ">Switch</p>
        </div>
    );
}
