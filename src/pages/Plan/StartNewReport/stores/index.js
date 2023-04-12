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
  currentId: '',
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
          ...state.isSubmit,
          clientInfoForm: bool,
        },
      }));
    } else if (value === 'successionAndWealthPlanForm') {
      set((state) => ({
        isSubmit: {
          ...state.isSubmit,
          successionAndWealthPlanForm: bool,
        },
      }));
    } else if (value === 'strategiesForm') {
      set((state) => ({
        isSubmit: {
          strategiesForm: bool,
          ...state.isSubmit,
        },
      }));
    } else if (value === 'coverLetterForm') {
      set((state) => ({
        isSubmit: {
          coverLetterForm: bool,
          ...state.isSubmit,
        },
      }));
    } else if (value === 'feeSummaryForm') {
      set((state) => ({
        isSubmit: {
          feeSummaryForm: bool,
          ...state.isSubmit,
        },
      }));
    }
  },

  setCurrentId: (id) => {
    set((state) => ({
      currentId: id,
    }));
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
  currentId: '',
  isFormModified: false,

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
    switch (value) {
      case 'clientInfoForm':
        set((state) => ({
          isSubmit: {
            clientInfoForm: bool,
            ...state.isSubmit,
          },
        }));
        break;
      case 'successionAndWealthPlanForm':
        set((state) => ({
          isSubmit: {
            successionAndWealthPlanForm: bool,
            ...state.isSubmit,
          },
        }));
        break;
      case 'strategiesForm':
        set((state) => ({
          isSubmit: {
            strategiesForm: bool,
            ...state.isSubmit,
          },
        }));
        break;
      case 'coverLetterForm':
        set((state) => ({
          isSubmit: {
            coverLetterForm: bool,
            ...state.isSubmit,
          },
        }));
        break;
      case 'coverLetterForm':
        set((state) => ({
          isSubmit: {
            feeSummaryForm: bool,
            ...state.isSubmit,
          },
        }));
    }
  },

  setCurrentId: (id) => {
    set((state) => ({
      currentId: id,
    }));
  },

  setIsFormModified: (bool) => {
    set((state) => ({
      isFormModified: bool,
    }));
  },
});

export const useReportUtilsStore = create(
  devtools(startNewReportNotPersistStore, {
    name: 'ReportUtils',
  })
);

export const useReportPersistUtilsStore = create(
  devtools(
    persist(startNewReportPersistStore, {
      name: 'ReportPersistUtils',
    })
  )
);
