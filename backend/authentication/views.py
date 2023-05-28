from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .serializers import EmployeeSerializer
from .models import Employee
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status



class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Retrieve the email from the request data
        email = request.data.get('email')
        print(email)

        # Retrieve the employee based on the provided email
        try:
            employee = Employee.objects.get(email=email)
        except Employee.DoesNotExist:
            return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)

        # Return the response with the employee information
        data = {
            'first_name': employee.first_name,
            'last_name': employee.last_name,
            'username': employee.username,
            'title': employee.title,
            'email': employee.email,
        }
        return Response(data)

    
    
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
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        employee = serializer.save()
        return Response(EmployeeSerializer(employee).data, status=status.HTTP_201_CREATED)
    else:
        print(serializer.errors)  # Add this line to print the serializer errors in the console
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)









