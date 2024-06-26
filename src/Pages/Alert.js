import React from 'react'
import { Box, Typography, Grid, styled, Paper, Alert, Stack, AlertTitle, Breadcrumbs} from '@mui/material';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Link} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

//Alert Types
const Severity = ["success", "info", "warning", "error"];

const AlertPage = () => {
    return (
        <Box>
            <Typography variant="h5" marginBottom="5px">
                Alerts
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link  className="Breadcrumb"  style={{color : "#899bbd",fontSize : "14px",textDecoration: "none"}}  to="/">
                    Home
                </Link>
                <Typography color="#899bbd" fontSize="14px">Components</Typography>
                <Typography color="#273246"  fontSize="14px">Alerts</Typography>
            </Breadcrumbs>

            <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Item sx={{ padding: "20px" }}>
                                <Typography variant="h6" color="#012970" fontSize="18px" marginBottom="20px" >
                                    Default
                                </Typography>
                                <Stack spacing={2} >
                                    {Severity.map((alertType) => (
                                        <Alert severity={alertType}>This is a {alertType} Alert.</Alert>
                                    ))}
                                </Stack>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ padding: "20px" }}>
                                <Typography variant="h6" color="#012970" fontSize="18px" marginBottom="20px" >
                                    Outlined
                                </Typography>
                                <Stack spacing={2} >
                                    {Severity.map((alertType) => (
                                        <Alert variant="outlined" severity={alertType}>
                                            This is an outlined {alertType} Alert.
                                        </Alert>
                                    ))}
                                </Stack>

                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Item sx={{ padding: "20px" }}>
                                <Typography variant="h6" color="#012970" fontSize="18px" marginBottom="20px" >
                                    Filled
                                </Typography>
                                <Stack spacing={2} >
                                    {Severity.map((alertType) => (
                                        <Alert variant="filled" severity={alertType}>
                                            This is an outlined {alertType} Alert.
                                        </Alert>
                                    ))}
                                </Stack>

                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item sx={{ padding: "20px" }}>
                                <Typography variant="h6" color="#012970" fontSize="18px" marginBottom="20px" >
                                    With Titles
                                </Typography>
                                <Stack spacing={2} >
                                    {Severity.map((alertType) => (
                                        <Alert severity={alertType}>
                                            <AlertTitle sx={{ textTransform: "capitalize" }}>{alertType}</AlertTitle>
                                            This is a {alertType} Alert with an encouraging title.
                                        </Alert>
                                    ))}
                                </Stack>

                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AlertPage;