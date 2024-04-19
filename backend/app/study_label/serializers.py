from rest_framework import serializers


class StudyLabelSerializer(serializers.Serializer):
    study_label_id = serializers.CharField(required=False)
    study_label_name = serializers.CharField()
