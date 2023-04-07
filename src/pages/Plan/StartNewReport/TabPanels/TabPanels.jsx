import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabItems } from '../lib/TabItems/TabItems';
import { useReportPersistStore } from '../stores';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const TabPanels = () => {
  const { tabPanel } = useReportPersistStore((state) => ({
    tabPanel: state.tabPanel,
  }));

  return (
    <Box sx={{ width: '100%', overflowY: 'auto' }}>
      <Box sx={{ borderTop: 0, borderColor: 'divider' }}>
        <Tabs value={tabPanel} aria-label="tax plan tabs" variant="fullWidth">
          {TabItems.map((item, index) => (
            <Tab
              key={index}
              sx={{ height: '75px', cursor: 'context-menu' }}
              label={item.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {TabItems.map((item, index) => (
        <TabPanel
          key={index}
          sx={{ width: '100%' }}
          value={tabPanel}
          index={index}
        >
          {item.panel}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabPanels;
