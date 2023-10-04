// CustomForm.js
import React from "react";
import { Formik, Field, Form } from "formik";
import {
  Button,
  Col,
  Container,
  Form as BootstrapForm,
  Row,
} from "react-bootstrap";
import * as Yup from "yup";

function CustomForm({ formFields, onSubmit }) {
  const initialValues = {};
  const validationSchema = {};

  // Create initial values and validation schema based on formFields configuration
  formFields.forEach((field) => {
    initialValues[field.name] = field.initialValue || "";
    validationSchema[field.name] = field.validation || Yup.string();
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape(validationSchema)}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form as={BootstrapForm} onSubmit={handleSubmit}>
            <Col>
              {formFields.map((field, index) => (
                <Row key={index}>
                  {field.type === "text" && (
                    <BootstrapForm.Group controlId={field.name}>
                      <BootstrapForm.Label>{field.label}</BootstrapForm.Label>
                      <Field
                        type={field.type}
                        name={field.name}
                        as={BootstrapForm.Control}
                        isInvalid={!!field.validation}
                      />
                      <BootstrapForm.Control.Feedback
                        type={field.validation.message ? "invalid" : "valid"}
                      >
                        {console.log(field.validation)}
                        {field.validation?.message}
                      </BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>
                  )}

                  {field.type === "checkbox" && (
                    <BootstrapForm.Group controlId={field.name}>
                      <BootstrapForm.Check
                        type="checkbox"
                        label={field.label}
                        name={field.name}
                      />
                    </BootstrapForm.Group>
                  )}

                  {field.type === "radio" && (
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>{field.label}</BootstrapForm.Label>
                      {field.options.map((option, optionIndex) => (
                        <BootstrapForm.Check
                          type="radio"
                          label={option.label}
                          name={field.name}
                          value={option.value}
                          key={optionIndex}
                        />
                      ))}
                    </BootstrapForm.Group>
                  )}
                </Row>
              ))}
            </Col>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default CustomForm;
