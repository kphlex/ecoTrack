from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password
from django.utils import timezone
from django.contrib.contenttypes.models import ContentType

class EmployeeManager(BaseUserManager):
    def create_employee(self, first_name, last_name, username, title, certifications, hire_date, email, password=None, admin_level=0):
        if not email:
            raise ValueError('Employees must have an email address')

        employee = self.model(
            first_name=first_name,
            last_name=last_name,
            username=username,
            title=title,
            certifications=certifications,
            hire_date=hire_date,
            admin_level=admin_level,
            email=self.normalize_email(email),
        )

    
        if password:
            employee.password = make_password(password)

        employee.save(using=self._db)
        return employee
    
    
    def create_superuser(self, first_name, last_name, username, title, certifications, hire_date, email, password, admin_level=3):
        # Create a superuser by calling the create_employee method with admin_level=3
        return self.create_employee(
            first_name=first_name,
            last_name=last_name,
            username=username,
            title=title,
            certifications=certifications,
            hire_date=hire_date,
            email=email,
            password=password,
            admin_level=admin_level
        )

class Employee(AbstractBaseUser):
    id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30)
    title = models.CharField(max_length=255)
    certifications = models.TextField()
    hire_date = models.DateField()
    admin_level = models.IntegerField(choices=((1, 'Admin Level 1'), (2, 'Admin Level 2'), (3, 'Admin Level 3')), default=0)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    objects = EmployeeManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username', 'title', 'certifications', 'hire_date', 'admin_level']
    

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.admin_level > 0
