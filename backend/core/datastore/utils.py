from google.cloud import datastore

class SetUpDatastoreClient:

    @classmethod
    def setup_client(cls):
        return datastore.Client()
