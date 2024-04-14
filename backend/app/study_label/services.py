import uuid

from core.datastore.utils import SetUpDatastoreClient

from .models import StudyLabel


class StudyLabelService:

    @classmethod
    def get_entity(cls, study_label_id):
        client = setup_client()
        key = client.key('StudyLabel', study_label_id)
        entity = client.get(key)
        return entity

    @classmethod
    def create(cls, data):
        client = setup_client()
        with client.context():
            entity = StudyLabel(
                study_label_name=data['study_label_name'],
                study_label_id=_create_random_id()
            )
            entity.put()
            return entity

    @classmethod
    def update(cls, study_label_id, data):
        client = setup_client()
        with client.context():
            key = client.key('StudyLabel', study_label_id)
            entity = client.get(key)

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
            key = client.key('StudyLabel', study_label_id)
            entity = client.get(key)
            if not entity:
                raise ValueError("Entity: StudyLabel not found with ID: {}".format(study_label_id))
            client.delete(key)


def setup_client():
    return SetUpDatastoreClient.setup_client()

def _create_random_id():
    return str(uuid.uuid4())
