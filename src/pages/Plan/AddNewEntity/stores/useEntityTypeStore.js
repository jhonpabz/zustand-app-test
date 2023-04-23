import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

const selectedEntityType = (set) => ({
  selectedType: undefined,

  setSelectedType: (type) => {
    set(() => ({
      selectedType: type,
    }));
  },
});

export const useEntityTypeStore = create(
  devtools(selectedEntityType, {
    name: 'SelectedEntityType',
  })
);
