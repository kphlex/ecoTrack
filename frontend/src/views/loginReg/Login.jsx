import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (values) => {
        console.log(values);

        const user = {
            email: values.email,
            password: values.password
        };

        try {
            const response = await axios.post(
                'http://localhost:8000/token/',
                user,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            const data = response.data;
            console.log(response.data);

            // Replace the localStorage related code with appropriate formik-related state and handlers
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <Box m="20px">
            <Header title="LOGIN" subtitle="Sign In to Your Account" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{
                    email: '',
                    password: ''
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="1fr"
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Submit
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default Login;
