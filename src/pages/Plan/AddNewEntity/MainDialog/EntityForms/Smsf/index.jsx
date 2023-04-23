import { Fragment, useEffect, useRef, useState } from 'react';

import {
  Button,
  CircularProgress,
  DialogActions,
  Tab,
  Tabs,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import { Title, Dialog, DialogTitle, DialogContent } from './Reusable';
import { tabPropsLookup } from './lib';
import { useSmsfForm } from './hooks';

const Smsf = ({
  data = {
    abn: 'asdf',
    as_at_date: '22/12/12',
    member_balance: '234123',
    member_status: 'asdf',
    members: 'asdf',
    notes: 'asdf',
    notes_by: 'asdf',
    owner_director: 'asdf',
    smsf_name: 'asdf',
    status: 'asdf',
    total_balance: '1234',
    xpm_relationship: 'asdf',
    xpm_relationship_type: 'asdf',
  },

  open = false,
  onClose,
}) => {
  const dialogRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(tabPropsLookup.details);
  const [rootData, setRootData] = useState(data);

  const formHook = useSmsfForm(rootData);
  const Form = currentTab.form;

  let timer;

  const handleClose = () => {
    // eslint-disable-next-line no-extra-boolean-cast
    // if (!!formHook.formState.isDirty)
    //   alert('Some changes were made. Are you sure you want to exit?'); //NOTE: Temporary

    setTimeout(() => {
      formHook.reset(data);
    }, 300);

    onClose();
  };

  const handleChangeRootData = (newPartialData) => {
    setRootData((previousData) => ({ ...previousData, ...newPartialData }));
  };

  const handleChangeTabs = (_, newValue) => {
    console.log('handleChangeTabs');
    formHook.handleSubmit((formData) => {
      handleChangeRootData(formData);
      setCurrentTab(tabPropsLookup[newValue]);
    })();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  const handleSubmit = () => {
    formHook.handleSubmit((data) => {
      const _dataForUpdate = { ...rootData, ...data };
      // TODO: Mutation function here
    })();
  };
  return (
    <Fragment>
      <DialogTitle>
        {/* Tabs */}
        <Tabs
          value={currentTab.id}
          onChange={handleChangeTabs}
          variant="fullWidth"
        >
          {Object.values(tabPropsLookup).map((tab) => (
            <Tab key={tab.id} value={tab.id} label={tab.label} />
          ))}
        </Tabs>
      </DialogTitle>

      <DialogContent>
        <Title>Add New Entity - SMSF</Title>
        <Form control={formHook.control} />
      </DialogContent>

      <DialogActions>
        <Button
          variant="cancel"
          //   disabled={isLoading}
          onClick={handleClose}
          sx={{ minWidth: '100px' }}
        >
          Cancel
        </Button>

        <LoadingButton
          onClick={handleSubmit}
          //   loading={isLoading}
          variant="contained"
          loadingIndicator={<CircularProgress size={24} color="inherit" />}
          sx={{ minWidth: '100px' }}
        >
          <span>Save</span>
        </LoadingButton>
      </DialogActions>
    </Fragment>
  );
};
export default Smsf;
