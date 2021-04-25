import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {Formik} from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string()
        .min(6, 'Too Short!')
        .max(10, 'Too Long!')
        .matches(/^[a-zA-Z0-9]*$/, 'Can only contain English letters and digits')
        .matches(/[0-9]+/, 'Must contain at least 1 digit')
        .matches(/[A-Z]+/, 'Must contain at least 1 Uppercase letter')
        .matches(/[a-z]+/, 'Must contain at least 1 Lowercase letter')
        .required('Required'),
});

function Registration() {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                name: '',
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Container>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row className="justify-content-md-center">
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.name && isValid}
                                    isInvalid={touched.name && !isValid}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button type="button"
                                disabled={!touched.name || !isValid}
                                onClick={() => console.log('clicked')}
                        >
                            Next
                        </Button>

                    </Form>
                </Container>

            )}
        </Formik>
    );
}

export default Registration
