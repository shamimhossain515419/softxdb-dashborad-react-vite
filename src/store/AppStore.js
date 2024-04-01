import { create } from "zustand";
const useBooleanStore = create((set) => ({
  toggleSitebarValue: false,
  toggleSitebarHandler: () =>
    set((state) => ({ toggleSitebarValue: !state.toggleSitebarValue })),
}));

export default useBooleanStore;
