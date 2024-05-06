from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password

from app.accounts.models import User

class UserAuth(BaseBackend):
    def authenticate(self, request, user_id=None, password=None):
        try:
            user = User.query(User.user_id == user_id).get()
            if user and check_password(password, user.password):
                return self.get_user(user.key.id())
        except NDBUser.DoesNotExist:
            return None

    def get_user(self, user_id):
        return User.get_by_id(user_id)
