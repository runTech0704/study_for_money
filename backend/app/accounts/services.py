import uuid

from google.cloud import ndb
from core.datastore.utils import SetUpDatastoreClient

from .models import User

class UserService:

    @classmethod
    def get_user(cls, user_id):
        client = setup_client()
        with client.context():
            key = _create_user_key(user_id)
            entity = key.get()
            return entity

    @classmethod
    def list(cls):
        client = setup_client()
        with client.context():
            query = User.query()
            entities = list(query.fetch())
            return entities

    @classmethod
    def create(cls, data):
        client = setup_client()
        with client.context():
            user_id = _create_random_id()
            key = _create_user_key(user_id)
            entity = User(
                key=key,
                username=data['username'],
                user_id=user_id,
                wallet=0
            )
            entity.put()
            return entity

    @classmethod
    def update(cls, user_id, data):
        client = setup_client()
        with client.context():
            key = _create_user_key(user_id)
            entity = key.get()

            if not entity:
                raise ValueError("Entity: User not found with ID: {}".format(user_id))

            data['user_id'] = user_id
            for field, value in data.items():
                setattr(entity, field, value)

            entity.put()
            return entity

    @classmethod
    def delete(cls, user_id):
        client = setup_client()
        with client.context():
            key = _create_user_key(user_id)
            entity = key.get()
            if not entity:
                raise ValueError("Entity: User not found with ID: {}".format(study_label_id))
            key.delete()

    @classmethod
    def authenticate_user(cls, user_id, password):
        with client.context():
            user = User.query(User.user_id == user_id).get()
            if user and user.check_password(password):
                return user
            return None


def setup_client():
    return SetUpDatastoreClient.setup_client()

def _create_random_id():
    return str(uuid.uuid4())

def _create_user_key(user_id):
    return SetUpDatastoreClient.create_key('User', user_id, namespace="")
