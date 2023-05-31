/* eslint-disable react/prop-types */
import "./App.css";
import { Nav } from "./Nav";
import { ProfileHeader } from "./componets/ProfileHeader";

const PostFeed = () => {
    return <div className="PostFeed">Postfeed </div>;
};
const Suggest = () => {
    return (
        <div className="Suggest">
            {/* Profile section */}
            <ProfileHeader />
        </div>
    );
};

function App() {
    return (
        <div className="App ">
            <Nav />
            <PostFeed />
            <Suggest />
        </div>
    );
}

export default App;
