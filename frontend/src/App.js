import { useState, useEffect } from "react";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import Topbar from './views/global/Topbar';
import Sidebar from './views/global/Sidebar';
import Dashboard from './views/dashboard';
import Team from './views/team';
import BBSCards from './views/bbscards/bbscards';
import Bar from './views/bar';
import EmployeeForm from './views/form/employeeForm';
import Line from './views/line';
import Pie from './views/pie';
import Calendar from './views/calendar/calendar';
import About from './views/about';
import Login from './views/loginReg/Login';
import Signup from './views/loginReg/Register';
import { useNavigate } from "react-router-dom";


function App() {
    const [theme, colorMode] = useMode();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebar, setIsSidebar] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Check for the access token in local storage
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // Update the authentication status and set the token
            setIsAuthenticated(true);
            setToken(storedToken);
        } else {
            // Navigate to the '/' path if there is no access token
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = (token) => {
        // Save the access token to local storage
        localStorage.setItem('token', token);

        // Update the authentication status and set the token
        setIsAuthenticated(true);
        setToken(token);
    };

    const handleLogout = () => {
        // Clear the access token from local storage
        localStorage.removeItem('token');

        // Reset the authentication status, token, and user info
        setIsAuthenticated(false);
        setToken('');
        setUserInfo(null);

        // Navigate to the '/' path
        navigate('/');
    };
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    {isAuthenticated && <Sidebar isSidebar={isSidebar} userInfo={userInfo} />}
                    <main className='content'>
                        {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} onLogout={handleLogout}/>}
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    isAuthenticated ? (
                                        <Navigate to="/dashboard" />
                                    ) : (
                                        <Login onLogin={handleLogin} setUserInfo={setUserInfo} />
                                    )
                                }
                            />
                            <Route
                                path="/signup"
                                element={
                                    isAuthenticated ? (
                                        <Navigate to="/dashboard" />
                                    ) : (
                                        <Signup />
                                    )
                                }
                            />
                            {isAuthenticated && (
                                <>
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/team" element={<Team />} />
                                    <Route path="/bbscards" element={<BBSCards />} />
                                    <Route path="/add/employee" element={<EmployeeForm />}/>
                                    <Route path="/bar" element={<Bar />} />
                                    <Route path="/line" element={<Line />} />
                                    <Route path="/pie" element={<Pie />} />
                                    <Route path="/calendar" element={<Calendar />} />
                                    <Route path="/about" element={<About />} />
                                </>
                            )}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
