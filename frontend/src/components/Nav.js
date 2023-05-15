import { Nav, Navbar, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export function Navigation() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">ecoTrack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {isAuth ? <Nav.Link href="/dashboard">Dashboard</Nav.Link> : null}
                    </Nav>
                    <Nav>
                        {isAuth ? (
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        ) : (
                            <Nav.Link href="/login">Login</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
