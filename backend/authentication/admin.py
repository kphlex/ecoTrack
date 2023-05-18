from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserChangeForm
from .models import Employee


class EmployeeChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = Employee


class UserAdmin(BaseUserAdmin):
    form = EmployeeChangeForm
    list_display = ('id', 'first_name', 'last_name', 'username', 'email', 'admin_level')
    list_filter = ('admin_level',)
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Permissions', {'fields': ('admin_level',)}),
    )
    ordering = ('id',)
    
    # Override filter_horizontal attribute
    filter_horizontal = ()


admin.site.register(Employee, UserAdmin)
