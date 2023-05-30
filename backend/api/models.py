from django.db import models
from django.utils import timezone

from enum import Enum
from ..authentication.models import Employee

class SafetyChoice(Enum):
    SAFE = "safe"
    RISK = "risk"
    YES = "yes"
    NO = "no"
        
class BBSCard(models.Model):
    id = models.BigAutoField(primary_key=True)
    employee_id = models.ForeignKey(Employee)
    project_number = models.CharField(max_length=30)
    project_manager = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date = models.DateField()
    time = models.TimeField()
    
    body_mechanics = models.CharField(SafetyChoice)
    body_posture_position = models.CharField(SafetyChoice)
    adequate_force = models.CharField(SafetyChoice)
    pushing_pulling_reaching = models.CharField(SafetyChoice)
    lifting_lowering = models.CharField(SafetyChoice)
    eyes_on_path = models.CharField(SafetyChoice)
    body_position = models.CharField(SafetyChoice)
    
    hand_protection = models.CharField(SafetyChoice)
    fall_protection = models.CharField(SafetyChoice)
    eye_face_protection = models.CharField(SafetyChoice)
    respirator_mask = models.CharField(SafetyChoice)
    hearing_protection = models.CharField(SafetyChoice)
    complete_ppe = models.CharField(SafetyChoice)
    proper_use_of_ppe = models.CharField(SafetyChoice)
    ppe_condition = models.CharField(SafetyChoice)
    
    tools_used_properly = models.CharField(SafetyChoice)
    correct_selection_and_use = models.CharField(SafetyChoice)
    mobile_equipment = models.CharField(SafetyChoice)
    guards_barriers_warnings = models.CharField(SafetyChoice)
    motorized_equipment = models.CharField(SafetyChoice)
    
    housekeeping = models.CharField(SafetyChoice)
    walking_surfaces = models.CharField(SafetyChoice)
    working_surfaces = models.CharField(SafetyChoice)
    clean_work_area = models.CharField(SafetyChoice)
    walkways_clear = models.CharField(SafetyChoice)
    contact_with_temperature = models.CharField(SafetyChoice)
    contact_with_rotating_equipment = models.CharField(SafetyChoice)
    contact_with_sharp_edges = models.CharField(SafetyChoice)
    caught_between_pinch_point = models.CharField(SafetyChoice)
    tool_slippage = models.CharField(SafetyChoice)
    walking_under_suspended_loads = models.CharField(SafetyChoice)
    confined_space = models.CharField(SafetyChoice)
    driver_safety = models.CharField(SafetyChoice)
    electrical_safety = models.CharField(SafetyChoice)
    harmful_substances_environments = models.CharField(SafetyChoice)
    hazardous_materials = models.CharField(SafetyChoice)
    
    procedures_available = models.CharField(SafetyChoice)
    workers_aware_of_procedure = models.CharField(SafetyChoice)
    procedure_followed = models.CharField(SafetyChoice)
    
    energy_sources_identified = models.CharField(SafetyChoice)
    correct_use_of_lock = models.CharField(SafetyChoice)
    correct_use_of_tag = models.CharField(SafetyChoice)
    loto_procedures = models.CharField(SafetyChoice)
    
    fall_arrest_equipment = models.CharField(SafetyChoice)
    correct_use_of_fall_arrest_equipment = models.CharField(SafetyChoice)
    fall_arrest_condition = models.CharField(SafetyChoice)
    fall_arrest_line_anchor_point = models.CharField(SafetyChoice)
    ladder_lift_scaffolding = models.CharField(SafetyChoice)
    correct_use_of_ladder_lift_scaffolding = models.CharField(SafetyChoice)
    fall_protection_barriers = models.CharField(SafetyChoice)
    
    correct_chemical_use = models.CharField(SafetyChoice)
    chemical_storage_labeling = models.CharField(SafetyChoice)
    mixing_safely = models.CharField(SafetyChoice)
    correct_disposal = models.CharField(SafetyChoice)
    ventilation = models.CharField(SafetyChoice)
    

    # objects = EmployeeManager()

    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS = ['first_name', 'last_name', 'username', 'title', 'hire_date']
