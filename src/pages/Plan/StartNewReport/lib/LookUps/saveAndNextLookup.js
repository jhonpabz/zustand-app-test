export const saveAndNextLookup = (val) => {
  let lookup = {
    0: {
      formSubmit: 'clientInfoForm',
      form: 'succession-form',
      nextTab: 1,
    },

    1: {
      formSubmit: 'successionAndWealthPlanForm',
      form: 'select-strategy-form',
      nextTab: 2,
    },

    2: {
      formSubmit: 'strategiesForm',
      form: 'cover-letter-form',
      nextTab: 3,
    },

    3: {
      formSubmit: 'coverLetterForm',
      form: 'fee-summary-form',
      nextTab: 4,
    },

    4: {
      // formSubmit: clientInfoForm,
      form: 'fee-summary-form',
    },
  };
  let result = lookup[val];
  return result;
};
