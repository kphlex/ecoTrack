from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Employee
        fields = ('id', 'first_name', 'last_name', 'username', 'title', 'certifications', 'hire_date', 'admin_level', 'email', 'password')

    def create(self, validated_data):
        employee = Employee.objects.create_employee(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            username=validated_data['username'],
            title=validated_data['title'],
            certifications=validated_data['certifications'],
            hire_date=validated_data['hire_date'],
            admin_level=validated_data['admin_level'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return employee
