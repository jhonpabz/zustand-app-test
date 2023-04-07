import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const startNewReportPersistStore = (set) => ({
  tabPanel: 0,
  setTabPanel: (panel) => {
    set((state) => ({
      tabPanel: panel,
    }));
  },
});

const startNewReportNotPersistStore = (set) => ({
  tabPanel: 0,
  setTabPanel: (panel) => {
    set((state) => ({
      tabPanel: panel,
    }));
  },
});

export const useReportStore = create(
  devtools(startNewReportNotPersistStore, {
    name: 'ReportUtils',
  })
);

export const useReportPersistStore = create(
  devtools(
    persist(startNewReportPersistStore, {
      name: 'ReportPersistUtils',
    })
  )
);
