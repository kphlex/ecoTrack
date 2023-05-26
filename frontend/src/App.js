import { useState } from "react";
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

function App() {
    const [theme, colorMode] = useMode();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSidebar, setIsSidebar] = useState(true);

    const handleLogin = () => {
        // Perform login process
        // Upon successful login, update the isAuthenticated state to true
        setIsAuthenticated(true);
    };

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    {isAuthenticated && <Sidebar isSidebar={isSidebar} />}
                    <main className='content'>
                        {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />}
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    isAuthenticated ? (
                                        <Navigate to="/dashboard" />
                                    ) : (
                                        <Login onLogin={handleLogin} />
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
