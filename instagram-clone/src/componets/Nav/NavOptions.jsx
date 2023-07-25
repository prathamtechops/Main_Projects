/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";

export const NavOptions = ({ Icon, title, onClick }) => {
    return (
        <div className="flex">
            <IconButton
                className="flex gap-3"
                onClick={onClick}
                style={{ color: "white", fontSize: "20px" }}
            >
                {<Icon style={{ fontSize: "32px" }} />}
                <p className="text-sm ">{title}</p>
            </IconButton>
        </div>
    );
};
