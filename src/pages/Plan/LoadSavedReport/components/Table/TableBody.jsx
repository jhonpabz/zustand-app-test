import { TableBody as MuiTableBody } from '@mui/material';

import TableRow from './TableRow/TableRow';
import useReportFormDataStore from '@pages/Plan/StartNewReport/stores/useReportFormDataStore';

const TableBody = ({ data }) => {
  const { reportData } = useReportFormDataStore((state) => ({
    reportData: state.reportData,
  }));

  console.log('reportDataz: ', reportData);

  return (
    <MuiTableBody>
      {reportData?.map((data) => (
        <TableRow key={data.id} data={data} />
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
