import * as React from 'react';
import { Box, Typography, Grid, styled, Paper, Accordion, AccordionActions, AccordionSummary, AccordionDetails, Button, Breadcrumbs} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link} from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));



const defaultAccordion = [
    {
        id: "panel1-header",
        title: "Accordion 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        button: false,
        ariaControls: "panel1-content",
        expand: false
    },
    {
        id: "panel2-header",
        title: "Accordion 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        button: false,
        ariaControls: "panel2-content",
        expand: false
    },
    {
        id: "panel3-header",
        title: "Accordion Actions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
        button: true,
        ariaControls: "panel3-content",
        expand: true
    },

]

function AccordionPage() {
    return (
        <Box>
            <Typography variant="h5"  >
                Accordion
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" marginBottom="30px">
                <Link  className="Breadcrumb"  style={{color : "#899bbd",fontSize : "14px",textDecoration: "none"}}  to="/">
                    Home
                </Link>
                <Typography color="#899bbd" fontSize="14px">Components</Typography>
                <Typography color="#273246"  fontSize="14px">Accordion</Typography>
            </Breadcrumbs>

            <Grid container>
                <Grid item md={6} xs={12}>
                    <Item sx={{ padding: "20px" }}>
                        <Typography variant="h6" color="#012970" fontSize="18px" marginBottom="20px" >
                            Default Accordion
                        </Typography>
                        {
                            defaultAccordion.map((accordion) => (
                                <Accordion defaultExpanded={accordion.expand}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={accordion.ariaControls}
                                        id={accordion.id}
                                    >
                                        {accordion.title}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {accordion.description}
                                    </AccordionDetails>
                                    {accordion.button ?
                                        < AccordionActions>
                                            <Button>Cancel</Button>
                                            <Button>Agree</Button>
                                        </AccordionActions>
                                        : ""

                                    }
                                </Accordion>
                            ))
                        }
                    </Item>

                </Grid>

            </Grid>



        </Box>
    )
}

export default AccordionPage;