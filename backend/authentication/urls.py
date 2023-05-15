from django.urls import path
from . import views
from authentication.views import signup


urlpatterns = [
    path('dashboard/', views.DashboardView.as_view(), name ='dashboard'),
    path('signup/', signup, name='signup'),
    path('logout/', views.LogoutView.as_view(), name ='logout')
]