import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const JobApplicationForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    education: {
      tenth: "",
      twelfth: "",
      graduation: "",
      postGraduation: "",
    },
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    education: Yup.object().shape({
      tenth: Yup.string().required("10th Grade details are required"),
      twelfth: Yup.string().required("12th Grade details are required"),
      graduation: Yup.string().required("Graduation details are required"),
      postGraduation: Yup.string(),
    }),
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Job Application Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-danger">{formik.errors.fullName}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-danger">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-danger">{formik.errors.address}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <h3>Education Details</h3>
          <div className="mb-3">
            <label htmlFor="tenth" className="form-label">
              10th Grade
            </label>
            <input
              type="text"
              className="form-control"
              id="tenth"
              name="education.tenth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education.tenth}
            />
            {formik.touched.education?.tenth &&
            formik.errors.education?.tenth ? (
              <div className="text-danger">{formik.errors.education.tenth}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="twelfth" className="form-label">
              12th Grade
            </label>
            <input
              type="text"
              className="form-control"
              id="twelfth"
              name="education.twelfth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education.twelfth}
            />
            {formik.touched.education?.twelfth &&
            formik.errors.education?.twelfth ? (
              <div className="text-danger">
                {formik.errors.education.twelfth}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="graduation" className="form-label">
              Graduation
            </label>
            <input
              type="text"
              className="form-control"
              id="graduation"
              name="education.graduation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education.graduation}
            />
            {formik.touched.education?.graduation &&
            formik.errors.education?.graduation ? (
              <div className="text-danger">
                {formik.errors.education.graduation}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="postGraduation" className="form-label">
              Post Graduation (if applicable)
            </label>
            <input
              type="text"
              className="form-control"
              id="postGraduation"
              name="education.postGraduation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education.postGraduation}
            />
            {formik.touched.education?.postGraduation &&
            formik.errors.education?.postGraduation ? (
              <div className="text-danger">
                {formik.errors.education.postGraduation}
              </div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
