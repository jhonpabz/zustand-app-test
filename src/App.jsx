import { Fragment } from 'react';
import StartNewReport from './pages/Plan/StartNewReport';
import LoadSavedReport from '@pages/Plan/LoadSavedReport';

function App() {
  return (
    <Fragment>
      <StartNewReport />
      <LoadSavedReport />
    </Fragment>
  );
}

export default App;
