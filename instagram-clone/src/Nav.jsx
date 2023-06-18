import { Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { NavOptions } from "./componets/NavOptions";

export const Nav = () => {
    return (
        <div className="Nav flex flex-col  justify-between  ">
            <section>
                <div className="p-2 mb-3">
                    <img
                        className="w-24 "
                        src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png"
                        alt=""
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <NavOptions Icon={HomeIcon} title="Home" />
                    <NavOptions Icon={SearchIcon} title="Search" />
                    <NavOptions Icon={ExploreIcon} title="Explore" />
                    <NavOptions Icon={OndemandVideoIcon} title="Reels" />
                    <NavOptions Icon={SendIcon} title="Message" />
                    <NavOptions Icon={AddCircleOutlineIcon} title="Create" />
                    <div className="ml-2 flex gap-2">
                        <Avatar
                            src=""
                            style={{
                                width: "26px",
                                height: "26px",
                            }}
                        />
                        <p className="mb-1">Post</p>
                    </div>
                </div>
            </section>
            <div className="flex ">
                <NavOptions Icon={DensityMediumIcon} title="More" />
            </div>
        </div>
    );
};
