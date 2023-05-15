from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from .models import User


class DashboardView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        content = {'message': 'Welcome to the Dashboard'}
        return Response(content)
    
    
    
class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        

@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = User.objects.create_user(
            username=serializer.validated_data['username'],
            email=serializer.validated_data['email'],
            password=serializer.validated_data['password'],
            first_name=serializer.validated_data['first_name'],
            last_name=serializer.validated_data['last_name']
        )
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
    else:
        print(serializer.errors)  # Add this line to print the serializer errors in the console
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)








