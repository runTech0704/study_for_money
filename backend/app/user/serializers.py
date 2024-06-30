from rest_framework import serializers

class UserSerializer(serializers.Serializer):
        user_id = serializers.CharField(required=False)
        password = serializers.CharField()
        username = serializers.CharField()
        wallet = serializers.IntegerField(required=False)
        is_author = serializers.BooleanField(required=False)
