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
import { useCurrentSchemaStore } from './stores';

const Smsf = ({
  data = {
    // abn: 'asdfa',
    // as_at_date: 'asdfS',
    // member_balance: 'asdf',
    // member_status: 'asdf',
    // members: 'asdf',
    // notes: 'asdf',
    // notes_by: 'asdf',
    // owner_director: 'asdf',
    // smsf_name: 'asdf',
    // status: 'asdf',
    // total_balance: 'asdfasd',
    // xpm_relationship: 'asdf',
    // xpm_relationship_type: 'asdf',
  },

  open = false,
  onClose,
}) => {
  const setSchema = useCurrentSchemaStore((state) => state.setSchema);
  const { schema } = useCurrentSchemaStore((state) => ({
    schema: state.schema,
  }));
  // const dialogRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(tabPropsLookup.details);
  const [rootData, setRootData] = useState(data);

  // const schema = tabPropsLookup(currentTab);
  // console.log(schema, 'schema');

  console.log('currentTab: ', currentTab.id);
  const formHook = useSmsfForm();
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

  // const handleChangeRootData = (newPartialData) => {
  //   setRootData((previousData) => ({ ...previousData, ...newPartialData }));
  // };

  const handleChangeTabs = (_, newValue) => {
    formHook.handleSubmit(
      (formData) => {
        console.log('formData', formData);
        // handleChangeRootData(formData);
        setCurrentTab(tabPropsLookup[newValue]);
      },
      (err) => console.log(err, 'err')
    )();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    setSchema(currentTab.schema);
  }, [currentTab]);
  // const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const useAddSmsfEntityMutation = useMutation({
    mutationFn: async (formData) => {
      return await axios.post(
        'http://127.0.0.1:8000/api/smsf-details',
        formData
      );
    },
    onSuccess: () => {
      console.log('SMSF Entity is successfully created.');
    },
    onError: () => {
      console.log('SMSF ERRRRRRRRRRRRROR.');
    },
  });

  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data: SmsfData,
  } = useAddSmsfEntityMutation;
  console.log('error: ', error?.response?.data?.message);
  console.log('error2: ', error);

  const handleSubmit = () => {
    formHook.handleSubmit((data) => {
      // const _dataForUpdate = { ...rootData, ...data };
      console.log('data: ', data);
      // Mutation function here
      useAddSmsfEntityMutation.mutate(data);
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
