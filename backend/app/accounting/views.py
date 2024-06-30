from rest_framework.response import Response
from rest_framework.decorators import api_view

from .services import AccountingService


# Create your views here.
@api_view(['POST'])
def conversion(request):
    wage = 1000
    time = request.data.get('study_time')
    svc = AccountingService()
    converted_money = svc.conversion(wage, time)
    return Response(
        {'money': str(converted_money)}
    )
