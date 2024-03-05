import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
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
        Sign Up Doctor
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
            <div className="mb-5 grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  FirstName
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Alexi"
                />
                {errors.firstName && touched.firstName && (
                  <small className="text-red-600">{errors.firstName}</small>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  LastName
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Hasna"
                />
                {errors.lastName && touched.lastName && (
                  <small className="text-red-600">{errors.lastName}</small>
                )}
              </div>
            </div>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="********"
              />
              {errors.password && touched.password && (
                <small className="text-red-600">{errors.password}</small>
              )}
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="********"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <small className="text-red-600">{errors.confirmPassword}</small>
              )}
            </div>

            <button
              type="submit"
              className="text-white bg-[#16A34A] hover:bg-[#094620]  focus:outline-none font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center"
              disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
