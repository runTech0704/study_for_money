from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import views, status
from rest_framework.response import Response

from .serializers import StudyLabelSerializer
from .services import StudyLabelService


class StudyLabelView(views.APIView):

    def get(self, request, **kwargs):
        study_label_id = kwargs.get('study_label_id', None)
        # GET method
        if study_label_id:
            try:
                entity = StudyLabelService.get_entity(study_label_id)
                return Response(StudyLabelSerializer(entity).data)
            except ValueError as e:
                return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
        # LIST method
        else:
            entities = StudyLabelService.list()
            return Response(StudyLabelSerializer(entities, many=True).data)

    def post(self, request):
        serializer = StudyLabelSerializer(data=request.data)
        if serializer.id_valid():
            entity = StudyLabelService.create(serializer.validated_data)
            return Response(
                StudyLabelSerializer(entity).data
            )

    def put(self, request, **kwargs):
        study_label_id = kwargs.get('study_label_id', None)
        if study_label_id is None:
            return Response({"error": "Method PUT requires an ID."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            entity = StudyLabelService.get_entity(study_label_id)
            serializer = StudyLabelSerializer(entity, data=request.data, partial=True)

            if serializer.is_valid():
                updated_entity = StudyLabelService.update(study_label_id, serializer.validated_data)
                return Response(StudyLabelSerializer(updated_entity).data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except ValueError as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, **kwargs):
        study_label_id = kwargs.get('study_label_id', None)
        if study_label_id is None:
            return Response({"error": "Method PUT requires an ID."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            StudyLabelService.delete(study_label_id)
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ValueError as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
