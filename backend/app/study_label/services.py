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

    def create(self, **kwargs):
        client = setup_client()
        with client.context():
            entity = StudyLabel(
                study_label_name=kwargs['study_label_name'],
                study_label_id=self._create_random_id
            )
            entity.put()
            return entity

    def _create_random_id(self):
        return str(uuid.uuid4())


def setup_client():
    return SetUpDatastoreClient.setup_client()
