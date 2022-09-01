import { Formik, Form, Field } from 'formik';

export const Forms = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      <Form>
        <label>
          Описание
          <Field name="title" type="text" />
        </label>
        <br />
        <label>
          Ссылка
          <Field name="link" type="text" />
        </label>
        <br />
        <button type="submit" disabled={isSubmitting}>
          добавить материал
        </button>
      </Form>
    </Formik>
  );
};
