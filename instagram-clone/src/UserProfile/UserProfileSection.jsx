import { Avatar } from "@mui/material";
import userStore from "../../store/userState";
import { Link } from "react-router-dom";

export function UserProfileSection() {
    const user = userStore((state) => state.user);

    return (
        <div className=" flex mb-9 ">
            <div className="ml-2 flex gap-2">
                <Avatar
                    src={user.profileImageURL}
                    style={{
                        width: "150px",
                        height: "150px",
                    }}
                />
            </div>
            <div className="flex flex-col ml-24 gap-6">
                <div className="flex gap-7 align-center j ">
                    <h1 className="mt-1">{user.username}</h1>
                    <Link
                        to="/setting"
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
                    >
                        Edit profile
                    </Link>
                </div>
                <div className="flex gap-5">
                    <p>4 Posts</p>
                    <p>100 Followers</p>
                    <p>100 Following</p>
                </div>
                <div className="flex">
                    <p className="font-semibold">{user.name}</p>
                </div>
            </div>
        </div>
    );
}
