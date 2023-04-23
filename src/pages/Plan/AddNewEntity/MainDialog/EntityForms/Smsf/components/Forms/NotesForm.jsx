import ControlledTextField from '@components/ControlledInputs/ControlledTextField';
import { FormSection } from '..';

export const NotesForm = ({ control }) => {
  return (
    <FormSection>
      <ControlledTextField
        control={control}
        name="notes"
        multiline
        rows={8}
        label="Notes"
        placeholder="Enter your notes here..."
      />
    </FormSection>
  );
};
