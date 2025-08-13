import { create } from 'zustand';

interface ComponentStore {
  sidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const useComponentStore = create<ComponentStore>((set) => ({
  sidebar: false,
  openSidebar: () => set({ sidebar: true }),
  closeSidebar: () => set({ sidebar: false }),
}));

export default useComponentStore;
