import React, { Component } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UserForm extends Component {
    title;
    id;
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.title = 'New User';
        //initial state
        this.state = {
            username: '',
            email: '',
        };
        if (this.id) {
            this.title = 'Edit User';
        }
    }
    componentDidMount() {
        if (this.id) {
            firebase.database().ref('/' + this.id)
                .on('value', snapshot => {
                    this.setState({
                        //snapshot username and email will display
                        username: snapshot.val().username,
                        email: snapshot.val().email,
                    });
                });
        }
    }
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        username: this.state.username,
                        email: this.state.email
                    }}
                    validate={values => {
                        let errors = {};
                        //properties for email field (with customised errors)
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        else if (values.email.length < 10) {
                            errors.email = 'Email address too short';
                        }
                        //properties for username field (with customised errors)
                        if (!values.username) {
                            errors.username = 'Required';
                        }
                        else if (values.username.length < 3) {
                            errors.username = 'username too short';
                        }
                        return errors;
                    }}
                    //function for submitButton event 
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            // if id matches
                            if (this.id) {
                                firebase.database().ref('/' + this.id).update({
                                    username: values.username,
                                    email: values.email
                                }).then(() => this.props.history.push("/"));
                            }
                            else {
                                firebase.database().ref('/').push({
                                    username: values.username,
                                    email: values.email
                                }).then(() => this.props.history.push("/"));
                            }
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            {/* styling for errors */}
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="email" component="div" />
                            </span>
                            <Field type="text" name="username" />
                            {/* styling for errors */}
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="username" component="div" />
                            </span>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
export default UserForm;