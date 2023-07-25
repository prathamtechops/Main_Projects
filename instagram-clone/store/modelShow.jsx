import create from "zustand";

const modalStore = create((set) => ({
    isOpen: false,
    toggleOn: () => set({ isOpen: true }),
    toggleOff: () => set({ isOpen: false }),
}));

export default modalStore;
