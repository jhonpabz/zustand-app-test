import { useState } from 'react';
import Box from '@mui/material/Box';
import TextFieldComponent from '@components/Forms/TextField';

import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import PageWrapper from '@components/PageWrapper';
import AddButton from '@components/Buttons/AddButton';
import RemoveButton from '@components/Buttons/RemoveButton';
import FormLabelComponent from '../../components/FormLabelComponent/FormLabelComponent';

import FormContainer from '@components/Forms/FormContainer/FormContainer';
import CustomTopicField from './CustomTopicField/CustomTopicField';

// import useStartNewReportStore from '../../stores/useStartNewReportStore';

const ClientInfoTab = () => {
  const newId = crypto.randomUUID();

  // const addClientInfoFormData = useStartNewReportStore(
  //   (state) => state.addClientInfoFormData
  // );

  const {
    control,
    formState: { errors },
    handleSubmit,
    // reset,
  } = useForm({});

  const onSubmit = (data) => {
    // addClientInfoFormData({ reportId: newId, clientGroupName, ...data });
    // setCurrentId(newId);
    // setCLientInfoData(data);
    // setIsSubmit((prevState) => ({ ...prevState, clientInfoForm: true }));
  };

  const [customTopicList, setCustomTopicList] = useState([
    {
      customTopic: '',
    },
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;

    const list = [...customTopicList];
    list[index][name] = value;

    setCustomTopicList(list);
  };

  const handleAddInput = () => {
    const list = [...customTopicList];
    list.push({ customTopic: '' });
    setCustomTopicList(list);
  };

  const handleRemoveInput = (index) => {
    const list = [...customTopicList];
    list.splice(index, 1);
    setCustomTopicList(list);
  };

  return (
    <>
      <PageWrapper>
        <FormContainer id="client-info-form" onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: '700' }}>
              Contact Details
            </Typography>

            <Box sx={{ pl: 2.5 }}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      control={control}
                      label="Client Primary Contact Name"
                      name="clientPrimaryContactName"
                      required={true}
                      errors={errors}
                    />
                    <TextFieldComponent
                      control={control}
                      label="Client Email"
                      name="clientEmail"
                      required={true}
                      errors={errors}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldComponent
                      control={control}
                      label="Casual Name"
                      name="casualName"
                      required={true}
                      errors={errors}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box sx={{ pt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: '700' }}>
              Client Specific Objectives or Concerns
            </Typography>
            <Box sx={{ pl: 2.5 }}>
              <FormLabelComponent>
                From a general perspective, you would like to ensure that:
              </FormLabelComponent>

              <TextFieldComponent
                control={control}
                label="Your personal and business assets are protected for future generations"
                name="protectedAssetsForFuture"
                errors={errors}
              />
              <TextFieldComponent
                control={control}
                label="Your assets are protected from attack from their creditors, banckruptcy ir divorce, and"
                name="protectedAssetsFromAttack"
                errors={errors}
              />
              <TextFieldComponent
                control={control}
                label="Your assets that you pass to your children to your creditors, bankruptcy and divorce of their own children, in the most tax effective manner"
                name="assetsThatYouCanPass"
                errors={errors}
              />
              <FormLabelComponent>
                Additionally, you have requested that we advise you about these
                specific topics:
              </FormLabelComponent>

              {customTopicList.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{ my: 1.5, display: 'flex', alignItems: 'center' }}
                  >
                    <CustomTopicField
                      control={control}
                      name={`customTopic` + index}
                      label="Custom Topic"
                      errors={errors}
                      required={true}
                      handleChange={handleChange}
                      index={index}
                      item={item}
                    />

                    {customTopicList.length !== 1 && (
                      <Box sx={{ ml: 2 }}>
                        <RemoveButton
                          onClick={() => handleRemoveInput(index)}
                        />
                      </Box>
                    )}
                  </Box>
                );
              })}
              <AddButton onClick={handleAddInput} sx={{ mt: 2 }} />
            </Box>
          </Box>
        </FormContainer>
      </PageWrapper>
    </>
  );
};

export default ClientInfoTab;
