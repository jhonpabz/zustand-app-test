import ClientInfoTab from '../../TabPanels/ClientInfoTab/ClientInfoTab';
import SuccessionWealthTransferPlanTab from '../../TabPanels/SuccessionWealthTransferPlanTab/SuccessionWealthTransferPlanTab';

export const TabItems = [
  {
    label: 'Client Info',
    panel: <ClientInfoTab />,
  },
  {
    label: 'Succession + Wealth Transfer Plan',
    panel: <SuccessionWealthTransferPlanTab />,
  },
  {
    label: 'Select Strategies',
    panel: <ClientInfoTab />,
  },
  {
    label: 'Cover Letter',
    panel: <ClientInfoTab />,
  },
  {
    label: 'Fee Summary',
    panel: <ClientInfoTab />,
  },
];
