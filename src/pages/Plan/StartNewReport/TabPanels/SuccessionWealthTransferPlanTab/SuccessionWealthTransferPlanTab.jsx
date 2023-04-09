import { useState } from 'react';
import PageWrapper from '@components/PageWrapper';
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Divider,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import EntityDropdown from './Components/Dropdowns/EntityDropdown';
import AddButton from '@components/Buttons/AddButton';
import WealthTransferPlanWrapper from './Components/Wrapper/WealthTransferPlanWrapper';
import WealthOwnerHeader from './Components/Header/WealthOwnerHeader';
import DropdownLabelWrapper from './Components/Wrapper/DropdownLabelWrapper';
import StructureDropdown from './Components/Dropdowns/StructureDropdown';

import DropdownComponent from '@components/Forms/Dropdown';
import FormContainer from '@components/Forms/FormContainer/FormContainer';
import FormLabelComponent from '../../components/FormLabelComponent/FormLabelComponent';

import PreviewPlanModal from './Components/PreviewPlanModal/PreviewPlanModal';
import useReportFormDataStore from '../../stores/useReportFormDataStore';
import { useReportPersistUtilsStore } from '../../stores';

const SuccessionWealthTransferPlanTab = () => {
  // const { value: isDialogOpen, toggle: toggleDialog } = useBoolean(false);
  const setIsSubmit = useReportPersistUtilsStore((state) => state.setIsSubmit);
  const updateSuccessionFormData = useReportFormDataStore(
    (state) => state.updateSuccessionFormData
  );
  const {
    control,
    formState: { errors },
    handleSubmit,
    // reset,
  } = useForm({
    resolver: yupResolver(SuccessionAndWealthTransferPlanSchema),
    defaultValues: {
      leadingMember: '',
      firstSuccessorLeadingMember: '',
      secondSuccessorLeadingMember: '',
    },
  });

  const [wealthOwnerFormFields, setWealthOwnerFormFields] = useState([
    {
      primaryStructure: '',
      primaryBeneficiary: '',
      secondaryStructure: '',
      secondaryBeneficiary: '',
      tertiaryStructure: '',
      tertiaryBeneficiary: '',
      allocator1: '',
      allocator2: '',
    },
  ]);

  const onSubmit = (data) => {
    setIsSubmit('clientInfoForm', true);
    updateSuccessionFormData({ reportId: currentId, ...data });
  };

  // Wealth Owner Form --Start--
  const handleChange = (event, index) => {
    const { name, value } = event.target;

    const fields = [...wealthOwnerFormFields];
    fields[index][name] = value;

    setWealthOwnerFormFields(fields);
  };

  const handleAddFormFields = () => {
    const fields = [...wealthOwnerFormFields];
    fields.push({
      primaryStructure: '',
      primaryBeneficiary: '',
      secondaryStructure: '',
      secondaryBeneficiary: '',
      tertiaryStructure: '',
      tertiaryBeneficiary: '',
      allocator1: '',
      allocator2: '',
    });
    setWealthOwnerFormFields(fields);
  };

  const handleRemoveFormFields = (index) => {
    const fields = [...wealthOwnerFormFields];
    fields.splice(index, 1);
    setWealthOwnerFormFields(fields);
  };
  // Wealth Owner Form --End--

  return (
    <>
      <PageWrapper>
        <FormContainer id="succession-form" onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: '700' }}>
              Succession Plan
            </Typography>
          </Box>
          <Box>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={12} lg={6}>
                  <DropdownLabelWrapper sx={{ mr: { lg: 7 }, mt: 1.5 }}>
                    <FormLabelComponent>
                      Leading Member (Key Person)
                    </FormLabelComponent>
                    <Box>
                      <DropdownComponent
                        name="leadingMember"
                        label="Entity"
                        control={control}
                        errors={errors}
                        options={EntityOptions}
                      />
                    </Box>
                  </DropdownLabelWrapper>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <DropdownLabelWrapper sx={{ ml: { lg: 5 }, my: 1.5 }}>
                    <FormLabelComponent>
                      First Successor Leading Member
                    </FormLabelComponent>
                    <Box>
                      <DropdownComponent
                        name="firstSuccessorLeadingMember"
                        label="Entity"
                        control={control}
                        errors={errors}
                        options={EntityOptions}
                      />
                    </Box>
                  </DropdownLabelWrapper>

                  <DropdownLabelWrapper sx={{ ml: { lg: 5 }, my: 1.5 }}>
                    <FormLabelComponent>
                      Second Successor Leading Member
                    </FormLabelComponent>
                    <Box>
                      <DropdownComponent
                        name="secondSuccessorLeadingMember"
                        label="Entity"
                        control={control}
                        errors={errors}
                        options={EntityOptions}
                      />
                    </Box>
                  </DropdownLabelWrapper>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row-reverse',
                    }}
                  >
                    <Button
                      onClick={toggleDialog}
                      sx={{ px: 3, py: 1.5 }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      Preview Plan
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ py: 1.5 }} />
          <WealthTransferPlanWrapper>
            <Typography variant="h6" sx={{ fontWeight: '700' }}>
              Wealth Transfer Plan
            </Typography>
            <AddButton onClick={handleAddFormFields} />
          </WealthTransferPlanWrapper>
          {wealthOwnerFormFields.map((field, index) => (
            <Box key={index}>
              <WealthOwnerHeader
                withRemove={wealthOwnerFormFields.length !== 1}
                onClick={() => handleRemoveFormFields(index)}
              />
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Box
                      sx={{
                        my: 1.5,
                        pt: 1,
                      }}
                    >
                      <FormLabelComponent>
                        Primary Beneficiary
                      </FormLabelComponent>
                      <Box sx={{ py: 1.5 }}>
                        <StructureDropdown />
                      </Box>
                      <EntityDropdown />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box
                      sx={{
                        my: 1.5,
                        pt: 1,
                      }}
                    >
                      <FormLabelComponent>
                        Secondary Beneficiary
                      </FormLabelComponent>
                      <Box sx={{ py: 1.5 }}>
                        <StructureDropdown />
                      </Box>
                      <EntityDropdown />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box
                      sx={{
                        my: 1.5,
                        pt: 1,
                      }}
                    >
                      <FormLabelComponent>
                        Tertiary Beneficiary
                      </FormLabelComponent>
                      <Box sx={{ py: 1.5 }}>
                        <StructureDropdown />
                      </Box>
                      <EntityDropdown />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Box
                      sx={{
                        my: 1.5,
                        pt: { lg: 4, md: 7 },
                        maxWidth: '240px',
                      }}
                    >
                      <Box sx={{ py: 1.5 }}>
                        <TextField
                          label="% Allocator"
                          name="allocator1"
                          variant="outlined"
                          value={field.allocator1}
                          onChange={(event) => handleChange(event, index)}
                          fullWidth
                        />
                      </Box>
                      <TextField
                        label="% Allocator"
                        name="allocator2"
                        value={field.allocator2}
                        onChange={(event) => handleChange(event, index)}
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              {wealthOwnerFormFields.length !== 1 && (
                <Divider sx={{ mt: 2, mb: 3 }} />
              )}
            </Box>
          ))}
        </FormContainer>
      </PageWrapper>
      <PreviewPlanModal open={isDialogOpen} onClose={toggleDialog} />
    </>
  );
};

export default SuccessionWealthTransferPlanTab;
