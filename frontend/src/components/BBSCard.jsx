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
} from '@mui/material';

const BBSForm = () => {
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
                        name="projectNumber"
                        label="Project Number"
                        value={formik.values.projectNumber}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="projectManager"
                        name="projectManager"
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
                        name="conductedByFirstName"
                        label="First Name"
                        value={formik.values.conductedByFirstName}
                        onChange={formik.handleChange}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ my: 2 }}>
                    <TextField
                        id="conductedByLastName"
                        name="conductedByLastName"
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
                <Typography variant="subtitle1" sx={{ mt: 2 }}>1. Ergonomics:</Typography>

                {/* Body mechanics */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Body mechanics</Typography>
                    <RadioGroup
                        name="bodyMechanics"
                        value={formik.values.bodyMechanics}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Body posture and position */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Body posture and position</Typography>
                    <RadioGroup
                        name="bodyPosture"
                        value={formik.values.bodyPosture}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Adequate force used */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Adequate force used</Typography>
                    <RadioGroup
                        name="adequateForce"
                        value={formik.values.adequateForce}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Pushing, pulling, reaching */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Pushing, pulling, reaching</Typography>
                    <RadioGroup
                        name="pushingPullingReaching"
                        value={formik.values.pushingPullingReaching}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Lifting and lowering techniques */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Lifting and lowering techniques</Typography>
                    <RadioGroup
                        name="liftingLoweringTechniques"
                        value={formik.values.liftingLoweringTechniques}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Eyes on the path */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Eyes on the path</Typography>
                    <RadioGroup
                        name="eyesOnPath"
                        value={formik.values.eyesOnPath}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Body position */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Body position</Typography>
                    <RadioGroup
                        name="bodyPosition"
                        value={formik.values.bodyPosition}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Personal Protective Equipment */}
                <Typography variant="subtitle1" sx={{ mt: 2 }}>2. Personal Protective Equipment:</Typography>

                {/* Hand protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Hand protection</Typography>
                    <RadioGroup
                        name="handProtection"
                        value={formik.values.handProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Fall protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall protection</Typography>
                    <RadioGroup
                        name="fallProtection"
                        value={formik.values.fallProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Eye/face protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Eye/face protection</Typography>
                    <RadioGroup
                        name="eyeFaceProtection"
                        value={formik.values.eyeFaceProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Respirator mask */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Respirator mask</Typography>
                    <RadioGroup
                        name="respiratorMask"
                        value={formik.values.respiratorMask}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Hearing protection */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Hearing protection</Typography>
                    <RadioGroup
                        name="hearingProtection"
                        value={formik.values.hearingProtection}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Complete PPE */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Complete PPE</Typography>
                    <RadioGroup
                        name="completePPE"
                        value={formik.values.completePPE}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Proper use of PPE */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Proper use of PPE</Typography>
                    <RadioGroup
                        name="properUsePPE"
                        value={formik.values.properUsePPE}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* PPE condition */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">PPE condition</Typography>
                    <RadioGroup
                        name="ppeCondition"
                        value={formik.values.ppeCondition}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Tools and Equipment */}
                <Typography variant="subtitle1" sx={{ mt: 2 }}>3. Tools and Equipment:</Typography>

                {/* Tools used properly */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Tools used properly</Typography>
                    <RadioGroup
                        name="toolsUsedProperly"
                        value={formik.values.toolsUsedProperly}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Correct selection and use */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct selection and use</Typography>
                    <RadioGroup
                        name="correctSelectionUse"
                        value={formik.values.correctSelectionUse}
                        onChange={formik.handleChange}
                        row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Mobile equipment */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Mobile equipment</Typography>
                        <RadioGroup
                            name="mobileEquipment"
                            value={formik.values.mobileEquipment}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Guards, barriers, warnings */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Guards, barriers, warnings</Typography>
                        <RadioGroup
                            name="guardsBarriersWarnings"
                            value={formik.values.guardsBarriersWarnings}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Motorized equipment */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Motorized equipment</Typography>
                        <RadioGroup
                            name="motorizedEquipment"
                            value={formik.values.motorizedEquipment}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Environment and Work Areas */}
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>4. Environment and Work Areas:</Typography>
    
                    {/* Housekeeping */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Housekeeping</Typography>
                        <RadioGroup
                            name="housekeeping"
                            value={formik.values.housekeeping}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Walking surfaces */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Walking surfaces</Typography>
                        <RadioGroup
                            name="walkingSurfaces"
                            value={formik.values.walkingSurfaces}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Working surfaces */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Working surfaces</Typography>
                        <RadioGroup
                            name="workingSurfaces"
                            value={formik.values.workingSurfaces}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                                    {/* Clean work area */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Clean work area</Typography>
                    <RadioGroup
                        name="cleanWorkArea"
                        value={formik.values.cleanWorkArea}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Walkways clear */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Walkways clear</Typography>
                    <RadioGroup
                        name="walkwaysClear"
                        value={formik.values.walkwaysClear}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Contact with temperature */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Contact with temperature</Typography>
                    <RadioGroup
                        name="contactWithTemperature"
                        value={formik.values.contactWithTemperature}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Contact with rotating equipment */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Contact with rotating equipment</Typography>
                    <RadioGroup
                        name="contactWithRotatingEquipment"
                        value={formik.values.contactWithRotatingEquipment}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Contact with sharp edges */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Contact with sharp edges</Typography>
                    <RadioGroup
                        name="contactWithSharpEdges"
                        value={formik.values.contactWithSharpEdges}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Caught between pinch point */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Caught between pinch point</Typography>
                    <RadioGroup
                        name="caughtBetweenPinchPoint"
                        value={formik.values.caughtBetweenPinchPoint}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Tool slippage */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Tool slippage</Typography>
                    <RadioGroup
                        name="toolSlippage"
                        value={formik.values.toolSlippage}
                        onChange={formik.handleChange}
                        row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
        
                    {/* Walking under suspended loads */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Walking under suspended loads</Typography>
                        <RadioGroup
                            name="walkingUnderSuspendedLoads"
                            value={formik.values.walkingUnderSuspendedLoads}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Confined space */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Confined space</Typography>
                        <RadioGroup
                            name="confinedSpace"
                            value={formik.values.confinedSpace}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Driver safety */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Driver safety</Typography>
                        <RadioGroup
                            name="driverSafety"
                            value={formik.values.driverSafety}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Electrical safety */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Electrical safety</Typography>
                        <RadioGroup
                            name="electricalSafety"
                            value={formik.values.electricalSafety}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Harmful substances/environments */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Harmful substances/environments</Typography>
                        <RadioGroup
                            name="harmfulSubstancesEnvironments"
                            value={formik.values.harmfulSubstancesEnvironments}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Hazardous materials */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Hazardous materials</Typography>
                        <RadioGroup
                            name="hazardousMaterials"
                            value={formik.values.hazardousMaterials}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                            <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Procedures */}
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>6. Procedures:</Typography>

                    {/* Procedures available */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Procedures available</Typography>
                        <RadioGroup
                            name="proceduresAvailable"
                            value={formik.values.proceduresAvailable}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Workers aware of procedure */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Workers aware of procedure</Typography>
                        <RadioGroup
                            name="workersAwareOfProcedure"
                            value={formik.values.workersAwareOfProcedure}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Procedure followed properly */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Procedure followed properly</Typography>
                        <RadioGroup
                            name="procedureFollowedProperly"
                            value={formik.values.procedureFollowedProperly}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Lock Out Tag Out */}
                    <Typography variant="subtitle1" sx={{ mt: 2 }}>7. Lock Out Tag Out:</Typography>
    
                    {/* Energy sources identified */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Energy sources identified</Typography>
                        <RadioGroup
                            name="energySourcesIdentified"
                            value={formik.values.energySourcesIdentified}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Correct use of lock */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Correct use of lock</Typography>
                        <RadioGroup
                            name="correctUseLock"
                            value={formik.values.correctUseLock}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* Correct use of tag */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">Correct use of tag</Typography>
                        <RadioGroup
                            name="correctUseTag"
                            value={formik.values.correctUseTag}
                            onChange={formik.handleChange}
                            row
                        >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
    
                    {/* LOTO procedures */}
                    <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                        <Typography variant="subtitle2">LOTO procedures</Typography>
                        <RadioGroup
                        name="lotoProcedures"
                        value={formik.values.lotoProcedures}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Fall Protection */}
                <Typography variant="subtitle1" sx={{ mt: 2 }}>8. Fall Protection:</Typography>

                {/* Fall arrest equipment */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall arrest equipment</Typography>
                    <RadioGroup
                        name="fallArrestEquipment"
                        value={formik.values.fallArrestEquipment}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Correct use of fall arrest equipment */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct use of fall arrest equipment</Typography>
                    <RadioGroup
                        name="correctUseFallArrestEquipment"
                        value={formik.values.correctUseFallArrestEquipment}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Fall arrest condition */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall arrest condition</Typography>
                    <RadioGroup
                        name="fallArrestCondition"
                        value={formik.values.fallArrestCondition}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Fall arrest line anchor point */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall arrest line anchor point</Typography>
                    <RadioGroup
                        name="fallArrestLineAnchorPoint"
                        value={formik.values.fallArrestLineAnchorPoint}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Ladder/Lift/Scaffolding */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Ladder/Lift/Scaffolding</Typography>
                    <RadioGroup
                        name="ladderLiftScaffolding"
                        value={formik.values.ladderLiftScaffolding}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />} label="At Risk" />
                    </RadioGroup>
                </FormControl>

                {/* Correct use of ladder/lift/scaffolding */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct use of ladder/lift/scaffolding</Typography>
                    <RadioGroup
                        name="correctUseLadderLiftScaffolding"
                        value={formik.values.correctUseLadderLiftScaffolding}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Fall protection barriers */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Fall protection barriers</Typography>
                    <RadioGroup
                        name="fallProtectionBarriers"
                        value={formik.values.fallProtectionBarriers}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Chemical Use */}
                <Typography variant="subtitle1" sx={{ mt: 2 }}>9. Chemical Use:</Typography>

                {/* Correct use */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct use</Typography>
                    <RadioGroup
                        name="correctUse"
                        value={formik.values.correctUse}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Storage labeling */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Storage labeling</Typography>
                    <RadioGroup
                        name="storageLabeling"
                        value={formik.values.storageLabeling}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Mixing safely */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Mixing safely</Typography>
                    <RadioGroup
                        name="mixingSafely"
                        value={formik.values.mixingSafely}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

                {/* Correct disposal */}
                <FormControl component="fieldset" fullWidth sx={{ my: 2 }}>
                    <Typography variant="subtitle2">Correct disposal</Typography>
                    <RadioGroup
                        name="correctDisposal"
                        value={formik.values.correctDisposal}
                        onChange={formik.handleChange}
                        row
                    >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
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
                        <FormControlLabel value="Safe" control={<Radio />} label="Safe" />
                        <FormControlLabel value="At Risk" control={<Radio />}
                        label="At Risk" />
                        </RadioGroup>
                    </FormControl>
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
    






