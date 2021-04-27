import {useEffect, useRef, useState} from 'react'
import * as ReactDOM from "react-dom";

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
        .matches(/^[a-zA-Z\s,.!?]*$/, 'Can only contain English (without numbers)')
        .required('Required'),
});


const Footer = props => {
    const [didFocus, setDidFocus] = useState(false)
    const [shouldValidate, setShouldValidate] = useState(false)
    const inputRef = useRef(null)

    useEffect(() =>{
        ReactDOM.findDOMNode(inputRef.current).focus()
    });

    const handleFocus = () => setDidFocus(true);

    return (
        <Formik
            validationSchema={schema}
            initialValues={{
                message: '',
            }}
        >
            {({
                  handleChange,
                  values,
                  isValid,
                  errors,
              }) => {

                const sendMessage = () => {
                    if (!isValid) return;
                    props.onMessageSent( values.message.trim())
                    values.message = ''
                }

                const checkLength = messageLength => {
                    if (didFocus && messageLength >= 0)
                        setShouldValidate(true)
                }

                const handleKeyPress = (event) => {
                    if(event.charCode === 13){
                        sendMessage()
                        event.preventDefault();
                    }
                }

                return (

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
                                        onChange={(obj) => {
                                            handleChange(obj);
                                            checkLength(values.message.length)
                                        }}
                                        isValid={shouldValidate && isValid}
                                        isInvalid={shouldValidate && !isValid}
                                        onFocus={handleFocus}
                                        onKeyPress={event => handleKeyPress(event, values)}
                                        ref={inputRef}
                                    />
                                    <Form.Control.Feedback
                                        type="invalid"
                                        className={'message-feedback'}
                                    >
                                        {errors.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button
                                    disabled={!shouldValidate || !isValid}
                                    onClick={() => sendMessage(values.message)}
                                    className={'send-btn'}
                                >
                                    <span>{'>'}</span>
                                </Button>
                            </Form.Row>
                        </Form>
                    </Container>
                </footer>
            )}}
        </Formik>
    );
}

export default Footer;
