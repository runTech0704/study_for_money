from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import views
from rest_framework.response import Response

from .serializers import StudyLabelSerializer
from .services import StudyLabelService


class StudyLabelView(views.APIView):

    def get(self, request, **kwargs):
        entity = StudyLabelService.get_entity(study_label_id=kwargs['study_label_id'])
        if entity:
            serializer = StudyLabelSerializer(entity)
            return Response(serializer.data)
        else:
            return HttpResponse("Hello World")

    def post(self, request):
        serializer = StudyLabelSerializer(data=request.data)
        if serializer.id_valid():
            entity = StudyLabelService.create(serializer.validated_data)
            return Response(
                StudyLabelSerializer(entity).data
            )
