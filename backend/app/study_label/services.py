import uuid

from backend.core.datastore.utils import SetUpDatastoreClient

from .models import StudyLabel


class StudyLabelService():

    client = SetUpDatastoreClient.setup_client()

    def get_entity(self, study_label_id):
        key = self.client.key('StudyLabel', study_label_id)
        entity = self.client.get(key)
        return entity

    def create(self, **kwargs):
        with self.client.context():
            entity = StudyLabel(
                study_label_name=kwargs['study_label_name'],
                study_label_id=self._create_random_id
            )
            entity.put()
            return entity

    def _create_random_id(self):
        return str(uuid.uuid4())
