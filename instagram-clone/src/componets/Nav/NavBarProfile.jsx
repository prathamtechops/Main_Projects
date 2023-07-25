import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import userStore from "../../../store/userState";

export function NavBarProfile({ onClick }) {
    const user = userStore((state) => state.user);
    return (
        <Link to="/profile">
            <div className="ml-2 flex gap-2" onClick={onClick}>
                <Avatar
                    src={user.profileImageURL}
                    style={{
                        width: "32px",
                        height: "32px",
                    }}
                />
                <p className="text-sm flex ml-1 mt-1 ">Post</p>
            </div>
        </Link>
    );
}
