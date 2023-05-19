import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { createEmployee } from "./EmployeeAction";

const AddEmployee = () => {
 const dispatch = useDispatch();

  const [userValue, setUserValue] = useState([]);
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    role: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("phone Name is required"),
    role: Yup.string().required("Please Select a Role "),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setUserValue([...userValue, values]);
    console.log(userValue);
    debugger;
    dispatch(createEmployee(values));
    resetForm();
  };
  return (
    <div className="container">
      <div className="employeeform">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="formField">
              <br />
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="form-control  "
              />
              <ErrorMessage
                name="name"
                component="span"
                className="error errMsg"
              />
            </div>
            <span></span>
            <br />
            <div className="formField">
              <Field
                type="text"
                className="form-control "
                id="exampleInputEmail1"
                name="email"
                placeholder="Enter Email"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="error errMsg"
              />
              <span></span>
            </div>

            <div className="formField">
              <br />
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone#"
                className="form-control formField"
              />
              <ErrorMessage
                name="phone"
                component="span"
                className="error errMsg"
              />
            </div>
            <span></span>

            <div className="formField">
              <br />
              <Field
                as="select"
                name="role"
                id="role"
                className="form-control formField"
              >
                <option value="">-- Select A Role --</option>
                <option value="Intern">Intern</option>
                <option value="Developer">Developer</option>
                <option value="CTO">CTO</option>
              </Field>
              <ErrorMessage
                name="role"
                component="span"
                className="error errMsg"
              />
            </div>
            <span></span>

            <br />

            <Button className="btn btn-lg btn-success " type="submit">
              Sign Up
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployee;
