import { TableBody as MuiTableBody } from '@mui/material';

import TableRow from './TableRow/TableRow';
import useReportFormDataStore from '@pages/Plan/StartNewReport/stores/useReportFormDataStore';

const TableBody = () => {
  const { reportData } = useReportFormDataStore((state) => ({
    reportData: state.reportData,
  }));

  return (
    <MuiTableBody>
      {reportData?.map((data) => (
        <TableRow key={data.id} data={data} />
      ))}
    </MuiTableBody>
  );
};

export default TableBody;
