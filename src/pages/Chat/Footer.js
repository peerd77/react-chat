import {useState} from 'react'

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {Formik} from 'formik';
import * as yup from 'yup';

import './Footer.scss'

const schema = yup.object().shape({
    message: yup.string()
        .min(5, 'Too Short!')
        .max(120, 'Too Long!')
        .matches(/^[a-zA-Z][a-zA-Z\s,.!?]*[a-zA-Z,.!?]$/, 'Can only contain English(without numbers)')
        .required('Required'),
});


const Footer = () => {
    const [didFocus, setDidFocus] = useState(false)
    const [shouldValidate, setShouldValidate] = useState(false)

    const handleSubmit2 = message => {
        console.log(message)
    }

    const checkLength = messageLength => {
        console.log(messageLength);
        if (didFocus && messageLength > 0)
            setShouldValidate(true)
    }

    const handleFocus = () => setDidFocus(true);

    // const validState =
    //     (!!didFocus && values.message.trim().length > 2) ;
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                message: '',
            }}
        >
            {({
                handleChange,
                  values,
                  isValid,
                  errors,
              }) => (

                <footer className={'footer'}>
                    <Container>
                        <Form
                            noValidate
                            autoComplete="off"
                        >
                            <Form.Row className="justify-content-md-center">
                                <Form.Group as={Col} controlId="validationFormik01">
                                    <Form.Control
                                        type="text"
                                        name="message"
                                        value={values.message}
                                        onChange={(obj)=>{handleChange(obj);checkLength(values.message.length)}}
                                        isValid={shouldValidate && isValid}
                                        isInvalid={shouldValidate && !isValid}
                                        onFocus={handleFocus}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                </Form.Group>
                                <Button
                                    disabled={!shouldValidate || !isValid}
                                    onClick={() => handleSubmit2(values.message)}
                                    className={'send-btn'}
                                >
                                    <span>{'>'}</span>
                                </Button>
                            </Form.Row>`



                        </Form>
                    </Container>
                </footer>

            )}
        </Formik>
    );
}

export default Footer;
