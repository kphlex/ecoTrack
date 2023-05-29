import React from 'react';
import { Box, Modal, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { ModalHeader, ModalBody, ModalTitle, ModalDialog } from 'react-bootstrap';

const BbsCard = () => {
    const isOpen = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    
    
    };

    return (
        <Box>
            <ModalDialog>
                <ModalHeader closeButton>
                    <ModalTitle>Behavior Base Safety Observation Sheet</ModalTitle>
                </ModalHeader>
                <ModalBody>
                <Formik initialValues={{}} onSubmit={handleSubmit}>
                    <Form>
                        Test
                    </Form>
                    </Formik>
                </ModalBody>
            </ModalDialog>
        </Box>
)}

export default BbsCard;


