import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {Formik} from 'formik';
import * as yup from 'yup';

import {Link} from 'react-router-dom'

import {useUserContext} from "../../hooks/useUserContext";
import {useState} from "react";

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

const  Registration = () => {

    const user = useUserContext();

    const [didFocus, setDidFocus] = useState(false);
    const [shouldValidate, setShouldValidate] = useState(false)


    const handleClick = name => {
        user.setUser({username: name});
    }

    const checkLength = nameLength => {
        if (didFocus && nameLength>=0) setShouldValidate(true);
    }

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                name: '',
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  values,
                  isValid,
                  errors,
              }) =>  (
                <Container>
                    <Form
                        noValidate
                        onSubmit={handleSubmit}
                        autoComplete="off"
                    >
                        <Form.Row className="justify-content-md-center">
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={(e) => {
                                        handleChange(e);
                                        checkLength(values.name.length)
                                    }}
                                    isValid={shouldValidate && isValid}
                                    isInvalid={shouldValidate && !isValid}
                                    onFocus={() => setDidFocus(true)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        {!shouldValidate || !isValid ? (
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
