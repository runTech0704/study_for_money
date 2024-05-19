from google.cloud import ndb

class SetUpDatastoreClient:

    @classmethod
    def setup_client(cls):
        return ndb.Client()

    @classmethod
    def create_key(cls, resource, resource_id, namespace=""):
        return ndb.Key(resource, resource_id, namespace=namespace)
