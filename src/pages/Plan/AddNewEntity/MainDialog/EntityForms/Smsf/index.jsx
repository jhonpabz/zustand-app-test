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

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Smsf = ({
  data = {
    abn: 'test',
    as_at_date: '22/12/12',
    member_balance: '111',
    member_status: 'test',
    members: 'test',
    notes: 'test',
    notes_by: 'test',
    owner_director: 'test',
    smsf_name: 'test',
    status: 'test',
    total_balance: '1111',
    xpm_relationship: 'test',
    xpm_relationship_type: 'test',
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
    console.log('rootData: ', rootData);
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

  const useAddSmsfEntityMutation = useMutation({
    mutationFn: async (formData) => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      return await axios.post(baseUrl + '/api/smsf-details', formData);
    },
    onSuccess: () => {
      console.log('SMSF Entity is successfully created.');
    },
  });

  const handleSubmit = () => {
    formHook.handleSubmit((data) => {
      const _dataForUpdate = { ...rootData, ...data };
      console.log('_dataForUpdate: ', _dataForUpdate);
      // Mutation function here
      useAddSmsfEntityMutation.mutate(_dataForUpdate);
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
