/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";
import { Nav } from "./componets/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import userStore from "../store/userState";
import SignUp from "./pages/SignUp";
import UserProfile from "./UserProfile/UserProfile.jsx";
import { Home } from "./pages/Home";
import Settings from "./Settings";

import CreatePostModal from "./CreatePostModal";
import modalStore from "../store/modelShow";

function App() {
    const user = userStore((state) => state.user);
    const { isOpen } = modalStore();
    const appClassName = "App h-screen w-screen bg-black m-0 p-0";

    if (user) {
        return (
            <div className={appClassName}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Nav />}>
                            <Route index element={<Home />} />
                            <Route path="search" element={<h1>Search</h1>} />
                            <Route path="explore" element={<h1>Explore</h1>} />
                            <Route path="reels" element={<h1>Reels</h1>} />
                            <Route path="profile" element={<UserProfile />}>
                                <Route path="post" element={<h1>Post</h1>} />
                                <Route path="saved" element={<h1>Saved</h1>} />
                                <Route
                                    path="tagged"
                                    element={<h1>Tagged</h1>}
                                />
                            </Route>
                            <Route path="setting" element={<Settings />} />

                            <Route
                                path="messages"
                                element={<h1>Messages</h1>}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
                {isOpen && <CreatePostModal />}
            </div>
        );
    } else {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
