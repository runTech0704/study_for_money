from google.cloud import ndb

class SetUpDatastoreClient:

    @classmethod
    def setup_client(cls):
        return ndb.Client()
