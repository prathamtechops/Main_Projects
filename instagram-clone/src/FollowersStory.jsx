import { Avatar } from "@mui/material";

export function FollowersStory() {
    return (
        <div className="flex ">
            <div>
                <div>
                    <Avatar
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />
                </div>
                <p className="text-sm ml-1">Name</p>
            </div>
        </div>
    );
}
