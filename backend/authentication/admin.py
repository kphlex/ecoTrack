from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    # Define the fields to display in the admin list view
    list_display = ('id', 'username', 'email', 'is_admin')
    # Optionally, specify the fields for searching and filtering
    search_fields = ('username', 'email')
    list_filter = ('is_admin',)

# Register the User model with the UserAdmin class
admin.site.register(User, UserAdmin)

