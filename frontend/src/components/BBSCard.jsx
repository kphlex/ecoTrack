import React from 'react';
import { useFormik } from 'formik';
import {
    Box,
    Typography,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    TextField,
    Button,
    Header,
    useTheme,
} from '@mui/material';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";



const BBSForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const formik = useFormik({
        initialValues: {
            projectNumber: '',
            projectManager: '',
            conductedByFirstName: '',
            conductedByLastName: '',
            date: null,
            time: null,
            ergonomics: {
                bodyMechanics: '',
                bodyPosture: '',
                adequateForce: '',
                pushingPullingReaching: '',
                liftingLoweringTechniques: '',
                eyesOnPath: '',
                bodyPosition: '',
            },
            personalProtectiveEquipment: {
                handProtection: '',
                fallProtection: '',
                eyeFaceProtection: '',
                respiratorMask: '',
                hearingProtection: '',
                completePPE: '',
                properUsePPE: '',
                ppeCondition: '',
            },
            toolsAndEquipment: {
                toolsUsedProperly: '',
                correctSelectionUse: '',
                mobileEquipment: '',
                guardsBarriersWarnings: '',
                motorizedEquipment: '',
            },
            environmentAndWorkAreas: {
                housekeeping: '',
                walkingSurfaces: '',
                workingSurfaces: '',
                cleanWorkArea: '',
                walkwaysClear: '',
                contactWithTemperature: '',
                contactWithRotatingEquipment: '',
                contactWithSharpEdges: '',
                caughtBetweenPinchPoint: '',
                toolSlippage: '',
                walkingUnderSuspendedLoads: '',
                confinedSpace: '',
                driverSafety: '',
                electricalSafety: '',
                harmfulSubstancesEnvironments: '',
                hazardousMaterials: '',
            },
            procedures: {
                proceduresAvailable: '',
                workersAwareOfProcedure: '',
                procedureFollowedProperly: '',
            },
            lockOutTagOut: {
                energySourcesIdentified: '',
                correctUseLock: '',
                correctUseTag: '',
                lotoProcedures: '',
            },
            fallProtection: {
                fallArrestEquipment: '',
                correctUseFallArrestEquipment: '',
                fallArrestCondition: '',
                fallArrestLineAnchorPoint: '',
                ladderLiftScaffolding: '',
                correctUseLadderLiftScaffolding: '',
                fallProtectionBarriers: '',
            },
            chemicalUse: {
                correctUse: '',
                storageLabeling: '',
                mixingSafely: '',
                correctDisposal: '',
                ventilation: '',
            },
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box sx={{ maxWidth: 600, m: 'auto', p: 3 }}>
            <Typography variant="h6">BBS - Behavioral Based Safety Checklist</Typography>

            <form onSubmit={formik.handleSubmit}>
                {/* Company Information */}
                <Typography variant="subtitle1" sx={{ mt: 2 }}>General Information:</Typography>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="projectNumber"
                        name="project_number"
                        label="Project Number"
                        value={formik.values.projectNumber}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="projectManager"
                        name="project_manager"
                        label="Project Manager"
                        value={formik.values.projectManager}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                {/* Conducted By */}
                <Typography variant="subtitle1" sx={{ mt: 2 }}>Conducted By:</Typography>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="conductedByFirstName"
                        name="first_name"
                        label="First Name"
                        value={formik.values.conductedByFirstName}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="conductedByLastName"
                        name="last_name"
                        label="Last Name"
                        value={formik.values.conductedByLastName}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                {/* Date and Time */}
                <Typography variant="subtitle1" sx={{ mt: 2 }}>Date and Time:</Typography>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="date"
                        name="date"
                        label="Date"
                        type="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="time"
                        name="time"
                        label="Time"
                        type="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>

                {/* Ergonomics */}
                <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                    1. Ergonomics:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Body mechanics */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Body mechanics</Typography>
                    <RadioGroup
                        name="body_mechanics"
                        value={formik.values.bodyMechanics}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Body posture and position */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Body posture and position</Typography>
                    <RadioGroup
                        name="body_posture"
                        value={formik.values.bodyPosture}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Adequate force used */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Adequate force used</Typography>
                    <RadioGroup
                        name="adequate_force"
                        value={formik.values.adequateForce}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Pushing, pulling, reaching */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Pushing, pulling, reaching</Typography>
                    <RadioGroup
                        name="pushing_pulling_reaching"
                        value={formik.values.pushingPullingReaching}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Lifting and lowering techniques */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Lifting and lowering techniques</Typography>
                    <RadioGroup
                        name="lifting_lowering_techniques"
                        value={formik.values.liftingLoweringTechniques}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Eyes on the path */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Eyes on the path</Typography>
                    <RadioGroup
                        name="eyes_on_path"
                        value={formik.values.eyesOnPath}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Body position */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Body position</Typography>
                    <RadioGroup
                        name="body_position"
                        value={formik.values.bodyPosition}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>
                    </Typography>
                </AccordionDetails>
                </Accordion>

                {/* Personal Protective Equipment */}
                <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                    2. Personal Protective Equipment:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Hand protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Hand protection</Typography>
                    <RadioGroup
                        name="hand_protection"
                        value={formik.values.handProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Fall protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall protection</Typography>
                    <RadioGroup
                        name="fall_protection"
                        value={formik.values.fallProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Eye/face protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Eye/face protection</Typography>
                    <RadioGroup
                        name="eye_face_protection"
                        value={formik.values.eyeFaceProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Respirator mask */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Respirator mask</Typography>
                    <RadioGroup
                        name="respirator_mask"
                        value={formik.values.respiratorMask}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Hearing protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Hearing protection</Typography>
                    <RadioGroup
                        name="hearing_protection"
                        value={formik.values.hearingProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Complete PPE */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Complete PPE</Typography>
                    <RadioGroup
                        name="complete_ppe"
                        value={formik.values.completePPE}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Proper use of PPE */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Proper use of PPE</Typography>
                    <RadioGroup
                        name="proper_use_of_ppe"
                        value={formik.values.properUsePPE}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* PPE condition */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">PPE condition</Typography>
                    <RadioGroup
                        name="ppe_condition"
                        value={formik.values.ppeCondition}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>
                    </Typography>
                </AccordionDetails>
                </Accordion>
                
                {/* Tools and Equipment */}
                <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                    3. Tools and Equipment:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Tools used properly */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Tools used properly</Typography>
                    <RadioGroup
                        name="tools_used_properly"
                        value={formik.values.toolsUsedProperly}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Correct selection and use */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct selection and use</Typography>
                    <RadioGroup
                        name="correct_selection_use"
                        value={formik.values.correctSelectionUse}
                        onChange={formik.handleChange}
                        row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Mobile equipment */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Mobile equipment</Typography>
                        <RadioGroup
                            name="mobile_equipment"
                            value={formik.values.mobileEquipment}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Guards, barriers, warnings */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Guards, barriers, warnings</Typography>
                        <RadioGroup
                            name="guards_barriers_warnings"
                            value={formik.values.guardsBarriersWarnings}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Motorized equipment */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Motorized equipment</Typography>
                        <RadioGroup
                            name="motorized_equipment"
                            value={formik.values.motorizedEquipment}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
                    </Typography>
                </AccordionDetails>
                </Accordion>
                
                    {/* Environment and Work Areas */}
                    <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                    4. Environment and Work Areas:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Housekeeping */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Housekeeping</Typography>
                        <RadioGroup
                            name="housekeeping"
                            value={formik.values.housekeeping}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Walking surfaces */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Walking surfaces</Typography>
                        <RadioGroup
                            name="walking_surfaces"
                            value={formik.values.walkingSurfaces}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Working surfaces */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Working surfaces</Typography>
                        <RadioGroup
                            name="working_surfaces"
                            value={formik.values.workingSurfaces}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                                    {/* Clean work area */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Clean work area</Typography>
                    <RadioGroup
                        name="clean_work_area"
                        value={formik.values.cleanWorkArea}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Walkways clear */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Walkways clear</Typography>
                    <RadioGroup
                        name="walkways_clear"
                        value={formik.values.walkwaysClear}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Contact with temperature */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Contact with temperature</Typography>
                    <RadioGroup
                        name="contact_with_temperature"
                        value={formik.values.contactWithTemperature}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Contact with rotating equipment */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Contact with rotating equipment</Typography>
                    <RadioGroup
                        name="contact_with_rotating_equipment"
                        value={formik.values.contactWithRotatingEquipment}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Contact with sharp edges */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Contact with sharp edges</Typography>
                    <RadioGroup
                        name="contact_with_sharp_edges"
                        value={formik.values.contactWithSharpEdges}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Caught between pinch point */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Caught between pinch point</Typography>
                    <RadioGroup
                        name="caught_between_pinch_point"
                        value={formik.values.caughtBetweenPinchPoint}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Tool slippage */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Tool slippage</Typography>
                    <RadioGroup
                        name="tool_slippage"
                        value={formik.values.toolSlippage}
                        onChange={formik.handleChange}
                        row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
        
                    {/* Walking under suspended loads */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Walking under suspended loads</Typography>
                        <RadioGroup
                            name="walking_under_suspended_loads"
                            value={formik.values.walkingUnderSuspendedLoads}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Confined space */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Confined space</Typography>
                        <RadioGroup
                            name="confined_space"
                            value={formik.values.confinedSpace}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Driver safety */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Driver safety</Typography>
                        <RadioGroup
                            name="driver_safety"
                            value={formik.values.driverSafety}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Electrical safety */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Electrical safety</Typography>
                        <RadioGroup
                            name="electrical_safety"
                            value={formik.values.electricalSafety}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Harmful substances/environments */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Harmful substances/environments</Typography>
                        <RadioGroup
                            name="harmful_substances_environments"
                            value={formik.values.harmfulSubstancesEnvironments}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Hazardous materials */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Hazardous materials</Typography>
                        <RadioGroup
                            name="hazardous_materials"
                            value={formik.values.hazardousMaterials}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
                    </Typography>
                </AccordionDetails>
            </Accordion>
                    
                    {/* Procedures */}
                    <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                    6. Procedures:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Procedures available */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Procedures available</Typography>
                        <RadioGroup
                            name="procedures_available"
                            value={formik.values.proceduresAvailable}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Workers aware of procedure */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Workers aware of procedure</Typography>
                        <RadioGroup
                            name="workers_aware_of_procedure"
                            value={formik.values.workersAwareOfProcedure}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Procedure followed properly */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Procedure followed properly</Typography>
                        <RadioGroup
                            name="procedure_followed_properly"
                            value={formik.values.procedureFollowedProperly}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    </Typography>
                </AccordionDetails>
                </Accordion>
                    
                    {/* Lock Out Tag Out */}
                    <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        7. Lock Out Tag Out:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Energy sources identified */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Energy sources identified</Typography>
                        <RadioGroup
                            name="energy_sources_identified"
                            value={formik.values.energySourcesIdentified}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Correct use of lock */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Correct use of lock</Typography>
                        <RadioGroup
                            name="correct_use_lock"
                            value={formik.values.correctUseLock}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Correct use of tag */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Correct use of tag</Typography>
                        <RadioGroup
                            name="correct_use_tag"
                            value={formik.values.correctUseTag}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* LOTO procedures */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">LOTO procedures</Typography>
                        <RadioGroup
                        name="loto_procedures"
                        value={formik.values.lotoProcedures}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                    </Typography>
                </AccordionDetails>
            </Accordion>
                

                {/* Fall Protection */}
                <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                    8. Fall Protection:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Fall arrest equipment */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall arrest equipment</Typography>
                    <RadioGroup
                        name="fall_arrest_equipment"
                        value={formik.values.fallArrestEquipment}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Correct use of fall arrest equipment */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct use of fall arrest equipment</Typography>
                    <RadioGroup
                        name="correct_use_fall_arrest_equipment"
                        value={formik.values.correctUseFallArrestEquipment}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Fall arrest condition */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall arrest condition</Typography>
                    <RadioGroup
                        name="fall_arrest_condition"
                        value={formik.values.fallArrestCondition}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Fall arrest line anchor point */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall arrest line anchor point</Typography>
                    <RadioGroup
                        name="fall_arrest_line_anchor_point"
                        value={formik.values.fallArrestLineAnchorPoint}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Ladder/Lift/Scaffolding */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Ladder/Lift/Scaffolding</Typography>
                    <RadioGroup
                        name="ladder_lift_scaffolding"
                        value={formik.values.ladderLiftScaffolding}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Correct use of ladder/lift/scaffolding */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct use of ladder/lift/scaffolding</Typography>
                    <RadioGroup
                        name="correct_use_ladder_lift_scaffolding"
                        value={formik.values.correctUseLadderLiftScaffolding}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Fall protection barriers */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall protection barriers</Typography>
                    <RadioGroup
                        name="fall_protection_barriers"
                        value={formik.values.fallProtectionBarriers}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                    </Typography>
                </AccordionDetails>
            </Accordion>
                
                {/* Chemical Use */}
                <Accordion style={{ backgroundColor: colors.primary[400] }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        9. Chemical Use:
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color={colors.blueAccent[400]} variant='h5'>
                        {/* Correct use */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct use</Typography>
                    <RadioGroup
                        name="correct_use"
                        value={formik.values.correctUse}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Storage labeling */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Storage labeling</Typography>
                    <RadioGroup
                        name="storage_labeling"
                        value={formik.values.storageLabeling}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Mixing safely */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Mixing safely</Typography>
                    <RadioGroup
                        name="mixing_safely"
                        value={formik.values.mixingSafely}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Correct disposal */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct disposal</Typography>
                    <RadioGroup
                        name="correct_disposal"
                        value={formik.values.correctDisposal}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Ventilation */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Ventilation</Typography>
                    <RadioGroup
                        name="ventilation"
                        value={formik.values.ventilation}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="risk" control={<Radio />}
                        label="At Risk" />
                        </RadioGroup>
                    </FormControl>
                    </Typography>
                </AccordionDetails>
            </Accordion>
                    {/* Comments */}
                    <FormControl fullWidth sx={{ my: 2 }}>
                        <TextField
                        id="comments"
                        name="comments"
                        label="Comments"
                        multiline
                        rows={4}
                        value={formik.values.comments}
                        onChange={formik.handleChange}
                        />
                    </FormControl>
                {/* Submit Button */}
                <Box sx={{ mt: 4 }}>
                    <Button type="submit" color="secondary" variant="contained">Submit</Button>
                </Box>
            </form>
        </Box>
    );
};
    export default BBSForm;
    






