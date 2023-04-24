import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

import { smsfDetailsSchema } from '../schema';

const CurrentFormSchema = (set) => ({
  schema: smsfDetailsSchema,
  setSchema: (val) => {
    set(() => ({
      schema: val,
    }));
  },
});

export const useCurrentSchemaStore = create(
  devtools(CurrentFormSchema, {
    name: 'CurrentFormSchema',
  })
);
