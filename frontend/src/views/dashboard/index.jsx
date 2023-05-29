import { Box, Button, IconButton, Typography, useTheme, Modal } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import BbsCard from "../../components/BBSCard";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        console.log(showModal);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome" />
                <Box>
                <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.gray[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            marginRight: "20px",
                        }}
                        onClick={handleOpenModal}
                    >
                        <PublishOutlinedIcon sx={{ mr: "10px" }} />
                        Submit BBS Card
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.gray[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            {showModal && <BbsCard />}
            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="102"
                        subtitle="Outstanding BBS Cards"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="Eye Protection"
                        subtitle="Top Observation"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="14"
                        subtitle="New Employees"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="14,888"
                        subtitle="Total Cards Recieved"
                        progress="0.80"
                        increase="+4%"
                        icon={<TrafficIcon
                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                        />
                    }
                />
            </Box>

            {/* ROW 2 */}
            <Box
                gridColumn="span 8"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
            >
                <Box
                    mt="25px"
                    p="0 30px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.gray[100]}
                        >
                            Card Breakdown
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                        >
                            5/14/23 - 6/14/23
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton>
                            <DownloadOutlinedIcon
                                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                            />
                        </IconButton>
                    </Box>
                </Box>
                <Box height="250px" m="-20px 0 0 0">
                    <LineChart isDashboard={true} />
                </Box>
            </Box>
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                overflow="auto"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.gray[100]}
                    p="15px"
                >
                    <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
                        Recent Submissions
                    </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                    <Box
                        key={`${transaction.txId}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="15px"
                    >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h5"
                                fontWeight="600"
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.gray[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.gray[100]}>{transaction.date}</Box>
                        <Box
                            backgroundColor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                        >
                            ${transaction.cost}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* ROW 3 */}
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                p="30px"
            >
                <Typography variant="h5" fontWeight="600">
                    Weekly Safety Topic
                </Typography>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="25px"
                >
                    <ProgressCircle size="125" />
                    <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        sx={{ mt: "15px" }}
                    >
                        Eye Protection and PPE
                    </Typography>
                    <Typography>5/30/23</Typography>
                </Box>
            </Box>
            <Box
                gridColumn="span 4"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                    >
                        Card Breakdown
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;

