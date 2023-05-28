from django.urls import path
from . import views
from authentication.views import signup
from authentication.views import UserInfoView


urlpatterns = [
    path('signup/', signup, name='signup'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('user/', UserInfoView.as_view(), name ='user'),
]