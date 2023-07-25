/* eslint-disable react/prop-types */
import { NavLink, Outlet } from "react-router-dom";
import { UserProfileSection } from "./UserProfileSection";
import GridOnIcon from "@mui/icons-material/GridOn";
import { IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PortraitIcon from "@mui/icons-material/Portrait";

function UserProfile() {
    const activeStyle = {
        borderTop: "1px solid white",
        borderRadius: "0",
    };

    return (
        <div className="mx-48 w-full flex flex-col ">
            <UserProfileSection />
            <hr className="solid" />

            <div className="flex gap-5 mx-auto justify-center w-full">
                <NavLink
                    to={`/profile/post`}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    className="text-gray-500 text-sm  font-semibold hover:text-black px-2 py-1 rounded-md transition-colors duration-300"
                >
                    <ProfileOptions Icon={GridOnIcon} title="Posts" />
                </NavLink>
                <NavLink
                    to={`/profile/saved`}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    className="text-gray-500 text-sm font-semibold hover:text-black px-2 py-1 rounded-md transition-colors duration-300"
                >
                    <ProfileOptions Icon={BookmarkBorderIcon} title="Saved" />
                </NavLink>
                <NavLink
                    to={`/profile/tagged`}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                    className="text-gray-500 text-sm font-semibold hover:text-black px-2 py-1 rounded-md transition-colors duration-300"
                >
                    <ProfileOptions Icon={PortraitIcon} title="Tagged" />
                </NavLink>
            </div>

            <Outlet />
        </div>
    );
}

export default UserProfile;

const ProfileOptions = ({ Icon, title }) => {
    return (
        <div className="flex ">
            <IconButton className="flex gap-3" style={{ color: "white" }}>
                {<Icon style={{ fontSize: "16px" }} />}
                <p className="text-xs">{title}</p>
            </IconButton>{" "}
        </div>
    );
};
