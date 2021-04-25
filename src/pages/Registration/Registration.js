import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {Formik} from 'formik';
import * as yup from 'yup';

import {Link} from 'react-router-dom'

import {useUserContext} from "../../hooks/useUserContext";

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

    const user = useUserContext();

    const handleClick = username => {
        user.setUser({username});
    }

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
                        {!touched.name || !isValid ? (
                            <></>) : (
                            <Link type="button"
                                  to='/chat'
                                  onClick={() => handleClick(values.name)}
                            >
                                Next
                            </Link>)
                        }


                    </Form>
                </Container>

            )}
        </Formik>
    );
}

export default Registration
