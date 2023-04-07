export const saveAndNextLookup = (val) => {
  let lookup = {
    0: {
      form: 'client-info-form',
      nextTab: 1,
    },

    1: {
      form: 'succession-form',
      nextTab: 2,
    },

    2: {
      form: 'select-strategy-form',
      nextTab: 3,
    },

    3: {
      form: 'cover-letter-form',
      nextTab: 4,
    },

    4: {
      form: 'fee-summary-form',
    },
  };
  let result = lookup[val];
  return result;
};
