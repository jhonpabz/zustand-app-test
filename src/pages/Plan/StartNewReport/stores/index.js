import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const startNewReportPersistStore = (set) => ({
  tabPanel: 0,
  currentForm: 'client-info-form',
  isSubmit: {
    clientInfoForm: false,
    successionAndWealthPlanForm: false,
    strategiesForm: false,
    coverLetterForm: false,
    feeSummaryForm: true,
  },
  setTabPanel: (panel) => {
    set((state) => ({
      tabPanel: panel,
    }));
  },

  setCurrentForm: (form) => {
    set((state) => ({
      currentForm: form,
    }));
  },
  setIsSubmit: (value, bool) => {
    console.log('value', value);
    console.log('bool', value === 'clientInfoForm');
    if (value === 'clientInfoForm') {
      set((state) => ({
        isSubmit: {
          ...state.isSubmit,
          clientInfoForm: bool,
        },
      }));
    }

    if (value === 'successionAndWealthPlanForm') {
      set((state) => ({
        isSubmit: {
          successionAndWealthPlanForm: bool,
          ...state.isSubmit,
        },
      }));
    }

    if (value === 'strategiesForm') {
      set((state) => ({
        isSubmit: {
          strategiesForm: bool,
          ...state.isSubmit,
        },
      }));
    }

    if (value === 'coverLetterForm') {
      set((state) => ({
        isSubmit: {
          coverLetterForm: bool,
          ...state.isSubmit,
        },
      }));
    }

    if (value === 'feeSummaryForm') {
      set((state) => ({
        isSubmit: {
          feeSummaryForm: bool,
          ...state.isSubmit,
        },
      }));
    }
  },
});

const startNewReportNotPersistStore = (set) => ({
  tabPanel: 0,
  currentForm: 'client-info-form',
  isSubmit: {
    clientInfoForm: false,
    successionAndWealthPlanForm: false,
    strategiesForm: false,
    coverLetterForm: false,
    feeSummaryForm: true,
  },
  setTabPanel: (panel) => {
    set((state) => ({
      tabPanel: panel,
    }));
  },

  setCurrentForm: (form) => {
    set((state) => ({
      currentForm: form,
    }));
  },

  setIsSubmit: (value, bool) => {
    if (value === 'clientInfoForm') {
      set((state) => ({
        isSubmit: {
          clientInfoForm: bool,
          ...state.isSubmit,
        },
      }));
    }

    if (value === 'successionAndWealthPlanForm') {
      set((state) => ({
        isSubmit: {
          successionAndWealthPlanForm: bool,
          ...state.isSubmit,
        },
      }));
    }

    if (value === 'strategiesForm') {
      set((state) => ({
        isSubmit: {
          strategiesForm: bool,
          ...state.isSubmit,
        },
      }));
    }

    if (value === 'coverLetterForm') {
      set((state) => ({
        isSubmit: {
          coverLetterForm: bool,
          ...state.isSubmit,
        },
      }));
    }

    if (value === 'feeSummaryForm') {
      set((state) => ({
        isSubmit: {
          feeSummaryForm: bool,
          ...state.isSubmit,
        },
      }));
    }
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
