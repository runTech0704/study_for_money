from django.views.decorators.csrf import ensure_csrf_cookie

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from app.user.serializers import UserSerializer
from app.user.services import UserService


class WalletView(APIView):

	def get(self, request, **kwargs):
		user_id = kwargs.get('user_id', None)
		# GET method
		if user_id:
			try:
				user = UserService.get_user(user_id)
				data = UserSerializer(user).data
				return Response(data)
			except ValueError as e:
				return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def account(request):
	pass