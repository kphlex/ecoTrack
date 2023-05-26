import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleFormSubmit = async (values) => {
        console.log(values);

        const user = {
            first_name: values.firstName,
            last_name: values.lastName,
            username: values.username,
            email: values.email,
            password: values.password,
            password2: values.password2
        };

        try {
            const response = await axios.post(
                "http://localhost:8000/signup/",
                user,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );

            console.log(response.data);

            // Redirect to the login page after successful signup
            window.location.href = "/";
        } catch (error) {
            console.error("Error occurred:", error);
        }
    };

    return (
        <Box m={2}>
            <Header title="SIGN UP" subtitle="Create a New Account" />

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{
                    firstName: "",
                    lastName: "",
                    username: "",
                    email: "",
                    password: "",
                    password2: ""
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap={2} gridTemplateColumns="1fr">
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={touched.firstName && Boolean(errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={touched.lastName && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Username"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.username}
                                name="username"
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Title"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.title}
                                name="title"
                                error={touched.title && Boolean(errors.title)}
                                helperText={touched.title && errors.title}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="date"
                                label="Hire Date"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.hire_date}
                                name="hire_date"
                                error={touched.hire_date && Boolean(errors.hire_date)}
                                helperText={touched.hire_date && errors.hire_date}
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
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Confirm Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password2}
                                name="password2"
                                error={touched.password2 && Boolean(errors.password2)}
                                helperText={touched.password2 && errors.password2}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt={2}>
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

export default Signup;

