import { create } from 'zustand';

import { devtools, persist } from 'zustand/middleware';

const reportFormData = (set) => ({
  reportData: [
    {
      reportId: '',
      clientInfoFormData: [],
      successionFormData: [],
      selectStrategyFormData: [],
    },
  ],
  addClientInfoFormData: (clientInfo) => {
    set((state) => ({
      reportData: [
        {
          reportId: clientInfo.reportId,
          clientInfoFormData: clientInfo,
          ...state.reportData.clientInfoData,
        },
      ],
    }));
  },

  updateSuccessionFormData: (data) =>
    set((state) => ({
      reportData: state.reportData.map((item) => {
        if (item.reportId === data.reportId) {
          return {
            ...item,

            successionFormData: data,
          };
        } else {
          return item;
        }
      }),
    })),

  updateSelectStrategyFormData: (data) =>
    set((state) => ({
      reportData: state.reportData.map((item) => {
        if (item.reportId === data.reportId) {
          return {
            ...item,

            selectStrategyFormData: data,
          };
        } else {
          return item;
        }
      }),
    })),
});

const useReportFormDataStore = create(
  devtools(
    persist(reportFormData, {
      name: 'ReportFormData',
    })
  )
);

export default useReportFormDataStore;
