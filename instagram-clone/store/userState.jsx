import create from "zustand";

const userStore = create((set) => ({
    user: null,
    login: (name, email, username, password, profileImageURL) => {
        set({ user: { name, email, username, password, profileImageURL } });
    },
}));

export default userStore;
