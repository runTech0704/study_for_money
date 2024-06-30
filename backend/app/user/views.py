from django.views.decorators.csrf import ensure_csrf_cookie

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view

from .serializers import UserSerializer
from .services import UserService


class UserView(APIView):

	def get(self, request, **kwargs):
		user_id = kwargs.get('user_id', None)
		# GET method
		if user_id:
			try:
				entity = UserService.get_user(user_id)
				return Response(UserSerializer(entity).data)
			except ValueError as e:
				return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
		# LIST method
		else:
			entities = UserService.list()
			return Response(UserSerializer(entities, many=True).data)

	def post(self, request):
		serializer = UserSerializer(data=request.data)
		user = request.user
		if serializer.is_valid():
			user = UserService.create(serializer.validated_data)
			refresh = RefreshToken.for_user(user)
			user_data = UserSerializer(user).data
			return Response({
				'refresh': str(refresh),
				'access': str(refresh.access_token),
				'user_id': user_data['user_id'],
			}, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def update(self, request):
		user_id = request.user.id
		serializer = UserSerializer(data=request.data, instance=user_id)
		if serializer.is_valid():
			user = UserService.update(user_id, **serializer.validated_data)
			return Response({'status': 'user updated'}, status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request):
		user_id = request.user.id
		if UserService.delete(user_id):
			return Response({'status': 'user deleted'}, status=status.HTTP_204_NO_CONTENT)
		return Response({'error': 'delete failed'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
	username = request.data.get('username')
	password = request.data.get('password')
	user = UserService.authenticate_user(username, password)
	if user:
		refresh = RefreshToken.for_user(user)
		user_data = UserSerializer(user).data
		return Response({
			'refresh': str(refresh),
			'access': str(refresh.access_token),
			'user_id': user_data['user_id'],
		}, status=status.HTTP_200_OK)
	return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def logout(request):
	refresh_token = request.data.get('refresh')
	if logout_user(refresh_token):
		return Response({'status': 'logged out'}, status=status.HTTP_205_RESET_CONTENT)
	return Response({'error': 'logout failed'}, status=status.HTTP_400_BAD_REQUEST)
