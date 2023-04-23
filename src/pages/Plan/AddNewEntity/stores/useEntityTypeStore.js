import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const selectedEntityType = (set) => ({
  selectedType: undefined,

  setSelectedType: (type) => {
    set(() => ({
      selectedType: type,
    }));
  },
});

export const useEntityTypeStore = create(
  devtools(
    persist(selectedEntityType, {
      name: 'SelectedEntityType',
    })
  )
);
