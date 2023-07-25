import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SendIcon from "@mui/icons-material/Send";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { NavOptions } from "./NavOptions";
import { Link, Outlet } from "react-router-dom";
import { NavBarProfile } from "./NavBarProfile";
import modalStore from "../../../store/modelShow";

export const Nav = () => {
    const { toggleOn, toggleOff } = modalStore();

    return (
        <>
            <div className="Nav flex flex-col justify-between">
                <section>
                    <div className="p-2 mb-3">
                        <img
                            className="w-24"
                            src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png"
                            alt=""
                        />
                    </div>
                    <nav className="flex flex-col gap-3">
                        <Link to="/" className="md:flex">
                            <NavOptions
                                Icon={HomeIcon}
                                title="Home"
                                onClick={toggleOff}
                            />
                        </Link>
                        <Link to="/search" className="md:flex">
                            <NavOptions
                                Icon={SearchIcon}
                                title="Search"
                                onClick={toggleOff}
                            />
                        </Link>
                        <Link to="/explore" className="md:flex">
                            <NavOptions
                                Icon={ExploreIcon}
                                title="Explore"
                                onClick={toggleOff}
                            />
                        </Link>
                        <Link to="/reels" className="md:flex">
                            <NavOptions
                                Icon={OndemandVideoIcon}
                                title="Reels"
                                onClick={toggleOff}
                            />
                        </Link>
                        <Link to="/messages" className="md:flex">
                            <NavOptions
                                Icon={SendIcon}
                                title="Message"
                                onClick={toggleOff}
                            />
                        </Link>

                        <NavOptions
                            Icon={AddCircleOutlineIcon}
                            title="Create"
                            onClick={toggleOn}
                        />

                        <NavBarProfile onClick={toggleOff} />
                    </nav>
                </section>
                <div className="flex">
                    <NavOptions Icon={DensityMediumIcon} title="More" />
                </div>
            </div>

            <Outlet />
        </>
    );
};
