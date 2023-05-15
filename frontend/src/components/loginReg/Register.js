import axios from "axios";
import { useState } from "react";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        const user = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password,
            password2: password2,
        };

        try {
            // Create the POST request.
            await axios.post("http://localhost:8000/signup/", user, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            // If successful, redirect to the login page.
            window.location.href = "/login";
        } catch (err) {
            console.log(err.response.data);
        }
    };

    return (
        <div className="Auth-form-container d-flex justify-content-center">
            <form className="Auth-form" onSubmit={submit}>
                <h2 className="Auth-form-title">Sign Up</h2>
                <div className="form-group mt-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="form-control mt-1"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="form-control mt-1"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="form-control mt-1"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input
                        className="form-control mt-1"
                        id="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password1">
                        Password
                    </label>
                    <input
                        className="form-control mt-1"
                        id="password1"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password2">
                        Confirm Password
                    </label>
                    <input
                        className="form-control mt-1"
                        id="password2"
                        type="password"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};
