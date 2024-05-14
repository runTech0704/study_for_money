from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import CustomUserSerializer
from .services import UserService


class UserView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = UserService.create(**serializer.validated_data)
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request):
        user_id = request.user.id
        serializer = CustomUserSerializer(data=request.data, instance=user_id)
        if serializer.is_valid():
            user = UserService.update(user_id, **serializer.validated_data)
            return Response({'status': 'user updated'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        user_id = request.user.id
        if UserService.delete(user_id):
            return Response({'status': 'user deleted'}, status=status.HTTP_204_NO_CONTENT)
        return Response({'error': 'delete failed'}, status=status.HTTP_400_BAD_REQUEST)

    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate_user(email, password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    def logout(self, request):
        refresh_token = request.data.get('refresh')
        if logout_user(refresh_token):
            return Response({'status': 'logged out'}, status=status.HTTP_205_RESET_CONTENT)
        return Response({'error': 'logout failed'}, status=status.HTTP_400_BAD_REQUEST)
