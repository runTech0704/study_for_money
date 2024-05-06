from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
        user_id = serializers.CharField(required=False)
        password = serializers.CharField()
        username = serializers.CharField()
        wallet = serializers.IntegerField()
        is_author = serializers.BooleanField()
