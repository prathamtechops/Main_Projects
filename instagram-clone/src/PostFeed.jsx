import { UserPost } from "./UserPost";
import { FollowersStory } from "./FollowersStory";

export const PostFeed = () => {
    return (
        <main className="PostFeed px-36 mt-3 ">
            {/* Story Section */}
            <div className="flex flex-row gap-6">
                <FollowersStory />
                <FollowersStory />
                <FollowersStory />
            </div>

            {/* Post Section */}
            <UserPost />
        </main>
    );
};
