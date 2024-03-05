import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("*required"),
    password: Yup.string().required("*required"),
  });

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h5 className="mb-8 text-3xl font-bold text-gray-900 text-center">
        Login Doctor
      </h5>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@gmail.com"
              />
              {errors.email && touched.email && (
                <small className="text-red-600">{errors.email}</small>
              )}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
              {errors.password && touched.password && (
                <small className="text-red-600">{errors.password}</small>
              )}
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <Field
                  id="remember"
                  name="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900">
                Remember me
              </label>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="text-white bg-[#16A34A] hover:bg-[#094620] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
