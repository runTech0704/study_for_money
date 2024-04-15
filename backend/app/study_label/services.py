import uuid

from google.cloud import ndb
from core.datastore.utils import SetUpDatastoreClient

from .models import StudyLabel


class StudyLabelService:

    @classmethod
    def get_entity(cls, study_label_id):
        client = setup_client()
        with client.context():
            key = _create_study_label_key(study_label_id)
            entity = key.get()
            return entity

    @classmethod
    def list(cls):
        client = setup_client()
        with client.context():
            query = StudyLabel.query()
            entities = list(query.fetch())
            return entities

    @classmethod
    def create(cls, data):
        client = setup_client()
        with client.context():
            study_label_id = _create_random_id()
            key = _create_study_label_key(study_label_id)
            entity = StudyLabel(
                key = key,
                study_label_name=data['study_label_name'],
                study_label_id=study_label_id
            )
            entity.put()
            return entity

    @classmethod
    def update(cls, study_label_id, data):
        client = setup_client()
        with client.context():
            key = _create_study_label_key(study_label_id)
            entity = key.get()

            if not entity:
                raise ValueError("Entity: StudyLabel not found with ID: {}".format(study_label_id))

            for field, value in data.items():
                setattr(entity, field, value)

            entity.put()
            return entity

    @classmethod
    def delete(cls, study_label_id):
        client = setup_client()
        with client.context():
            key = _create_study_label_key(study_label_id)
            entity = key.get()
            if not entity:
                raise ValueError("Entity: StudyLabel not found with ID: {}".format(study_label_id))
            client.delete(key)


def setup_client():
    return SetUpDatastoreClient.setup_client()

def _create_random_id():
    return str(uuid.uuid4())

def _create_study_label_key(study_label_id):
    return ndb.Key('StudyLabel', study_label_id, namespace="")
