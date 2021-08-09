import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormikAttempt = () => {
  return (
    <div>
      <h1>Fun form!</h1>
      <h1>Name</h1>
      <Formik
        initialValues={{ name: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (!/^[A-Z0-9._%+-]{2,}$/i.test(values.name)) {
            errors.name = "Invalid name";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
