import { Avatar } from "@mui/material";
import userStore from "../../../store/userState";

export const Suggest = () => {
    const user = userStore((state) => state.user);
    return (
        <div className="Suggest">
            {/* Profile section */}
            <div className="flex  justify-between align-center  ">
                {/* Profile Img and name */}
                <div className="flex ">
                    <div>
                        <Avatar
                            src={user.profileImageURL}
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                        />
                    </div>
                    <div className="ml-5">
                        <h3>{user.username}</h3>{" "}
                        <p className=" text-gray-400 text-sm ">{user.name}</p>
                    </div>
                </div>
                <p className=" text-blue-500 mt-3  text-xs ">Switch</p>
            </div>
            {/* Suggestions section */}
            <div className="Suggest__suggestions">
                <div className="Suggest__suggestions__header font-semibold flex justify-between mt-3 text-sm ">
                    <h3 className=" text-gray-400 ">Suggestions for you</h3>
                    <p className=" text-xs">See All</p>
                </div>
            </div>
            {/* Suggested for you */}
            <SuggestedUser />
            <SuggestedUser />
            <SuggestedUser />
            <SuggestedUser />
            <SuggestedUser />
            <div className="footer text-gray-400 text-xs mt-5 ">
                About Help Press API Jobs Privacy Terms Locations Language
                English Meta Verified © 2023 INSTAGRAM FROM META
            </div>
        </div>
    );
};

function SuggestedUser() {
    return (
        <div className="flex  justify-between align-center mt-3 ">
            <div className="flex justify-between align-center  ">
                <div className="mt-2">
                    <Avatar
                        style={{
                            width: "30px",
                            height: "30px",
                        }}
                    />
                </div>
                <div className="ml-3">
                    <h3>Username</h3>{" "}
                    <p className=" text-gray-400 text-sm ">Followed by</p>
                </div>
            </div>
            <p className=" text-blue-500 mt-3  text-xs ">Follow</p>
        </div>
    );
}
