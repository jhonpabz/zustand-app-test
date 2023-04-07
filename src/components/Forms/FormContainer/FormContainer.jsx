const FormContainer = ({ children, onSubmit, id }) => {
  return (
    <>
      <form id={id} onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
};

export default FormContainer;
