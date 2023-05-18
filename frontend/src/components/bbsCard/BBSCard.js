import React from 'react';

const BbsCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex p-3 mb-3">
                <h3 className="card-header mb-3">Behavior Base Safety Observation Sheet</h3>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="projectNumber" className="form-label">Project Number:</label>
                            <input type="text" className="form-control" id="projectNumber" placeholder="Enter project number" />
                        </div>
                        <div className="col">
                            <label htmlFor="date" className="form-label">Date:</label>
                            <input type="date" className="form-control" id="date" />
                        </div>
                        <div className="col">
                            <label htmlFor="observerName" className="form-label">Observer's Name:</label>
                            <input type="text" className="form-control" id="observerName" placeholder="Enter observer's name" />
                        </div>
                    </div>
                    <h4 className="card-title mb-4">Mark all observations below</h4>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bodyPositioning" />
                                <label className="form-check-label" htmlFor="bodyPositioning">Body Positioning</label>
                            </div>
                            <div className="bpList mt-4">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bpPivotingTwisting" />
                                <label className="form-check-label" htmlFor="bpPivotingTwisting">Pivoting/Twisting</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bpRiskFalling" />
                                <label className="form-check-label" htmlFor="bpRiskFalling">Risk of Falling</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bpLineOfFire" />
                                <label className="form-check-label" htmlFor="bpLineOfFire">Line of Fire</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bpAscendingDescending" />
                                <label className="form-check-label" htmlFor="bpAscendingDescending">Ascending/Descending</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bpPosture" />
                                <label className="form-check-label" htmlFor="bpPosture">Posture</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bpGripForce" />
                                <label className="form-check-label" htmlFor="bpGripForce">Grip/Force</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="bpErgonomics" />
                                <label className="form-check-label" htmlFor="bpErgonomics">Ergonomics</label>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppe" />
                                <label className="form-check-label" htmlFor="ppe">PPE</label>
                            </div>
                            <div className="bpList mt-4">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeHead" />
                                <label className="form-check-label" htmlFor="ppeHead">Head</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeRespiratory" />
                                <label className="form-check-label" htmlFor="ppeRespiratory">Respiratory</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeEyesFace" />
                                <label className="form-check-label" htmlFor="ppeEyesFace">Eyes / Face</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeHearing" />
                                <label className="form-check-label" htmlFor="ppeHearing">Hearing</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeHands" />
                                <label className="form-check-label" htmlFor="ppeHands">Hands</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeBody" />
                                <label className="form-check-label" htmlFor="ppeBody">Body</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeFeet" />
                                <label className="form-check-label" htmlFor="ppeFeet">Feet</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="ppeQuality" />
                                <label className="form-check-label" htmlFor="ppeQuality">Quality of PPE</label>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="toolsEquipment" />
                                <label className="form-check-label" htmlFor="toolsEquipment">Tools & Equipment</label>
                            </div>
                            <div className="bpList mt-4">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="toolsUsedCorrectly" />
                                <label className="form-check-label" htmlFor="toolsUsedCorrectly">Used Correctly</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="toolsSelectionCondition" />
                                <label className="form-check-label" htmlFor="toolsSelectionCondition">Selection/Condition</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="toolsAppropriateTask" />
                                <label className="form-check-label" htmlFor="toolsAppropriateTask">Appropriate for task/use</label>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="workEnvironment" />
                                <label className="form-check-label" htmlFor="workEnvironment">Work Environment</label>
                            </div>
                            <div className="bpList mt-4">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="weHousekeeping" />
                                <label className="form-check-label" htmlFor="weHousekeeping">Housekeeping</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="weTripHazards" />
                                <label className="form-check-label" htmlFor="weTripHazards">Trip Hazards</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="weDangerCautionTap" />
                                <label className="form-check-label" htmlFor="weDangerCautionTap">Danger / Caution Tap</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="weMarkings" />
                                <label className="form-check-label" htmlFor="weMarkings">Markings</label>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="procedures" />
                                <label className="form-check-label" htmlFor="procedures">Procedures</label>
                            </div>
                            <div className="bpList mt-4">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="procNoSOP" />
                                <label className="form-check-label" htmlFor="procNoSOP">No SOP Provided</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="procInadequate" />
                                <label className="form-check-label" htmlFor="procInadequate">Inadequate procedure</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="procAdequate" />
                                <label className="form-check-label" htmlFor="procAdequate">Adequate but not followed</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="procTraining" />
                                <label className="form-check-label" htmlFor="procTraining">Training</label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="procLOTO" />
                                <label className="form-check-label" htmlFor="procLOTO">LOTO / Energy Isolation</label>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                    <div className="mb-3">
                        <label htmlFor="observationDescription" className="form-label">Describe the observation:</label>
                        <textarea className="form-control" id="observationDescription" placeholder="Enter observation description"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="employeeInput" className="form-label">Employee/Observer input:</label>
                        <textarea className="form-control" id="employeeInput" placeholder="Enter employee/observer input"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="employeeAction" className="form-label">Employee's action taken or recommendation:</label>
                        <textarea className="form-control" id="employeeAction" placeholder="Enter employee's action or recommendation"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="supervisorAction" className="form-label">Supervisor or management action taken:</label>
                        <textarea className="form-control" id="supervisorAction" placeholder="Enter supervisor/management action"></textarea>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default BbsCard;

