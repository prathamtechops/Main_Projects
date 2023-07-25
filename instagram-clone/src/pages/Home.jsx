import { Suggest } from "../componets/Suggested/Suggest";
import { PostFeed } from "../PostFeed";

export const Home = () => {
    return (
        <>
            <PostFeed />
            <Suggest />
        </>
    );
};
