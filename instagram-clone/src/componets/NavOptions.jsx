/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";

export const NavOptions = ({ Icon, title }) => {
    return (
        <div className="flex gap-3">
            <div className="flex items-center justify-center  ">
                <IconButton style={{ color: "white" }}>{<Icon />}</IconButton>{" "}
                <p className="mb-1">{title}</p>
            </div>
        </div>
    );
};
