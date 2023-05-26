import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';



const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box m="20px">
            <Header title="About" subtitle="Application Information" />
            <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        FRONTEND
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        React 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        BACKEND
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        Django Rest Framework & MySQL Database
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        DEV TEAM
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        Cameron Ezell
                        <Box marginBottom='40px'>
                            <a href="https://github.com/kphlex" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <GitHubIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2}} />
                            </a>
                            <a href="https://linkedin.com/in/ezellcam/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <LinkedInIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2}} />
                            </a>
                            <a href="http://kphlex.net/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <LanguageIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2}} />
                            </a>
                        </Box>
                        Brendan Cordova
                        <Box marginBottom='40px'>
                            <a href="https://github.com/cordovalegacy" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <GitHubIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2}} />
                            </a>
                            <a href="https://linkedin.com/in/brendan-cordova-2874011ba/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <LinkedInIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2}} />
                            </a>
                            <a href="http://www.legacybuildspc.com/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <LanguageIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2,}} />
                            </a>
                        </Box>
                        Kelsey Bowen
                        <Box>
                            <a href="https://github.com/kelseybowen" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <GitHubIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2}} />
                            </a>
                            <a href="https://linkedin.com/in/kelseyabowen/" target="_blank" rel="noopener noreferrer" className='custom-link'>
                                <LinkedInIcon sx={{ fontSize: 35, marginTop: 2, marginRight: 2}} />
                            </a>
                        </Box>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        TOOLS
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        Git & Docker
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        HELPFUL LINKS
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default About;
