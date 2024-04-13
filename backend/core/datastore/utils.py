from google.cloud import datastore

class SetUpDatastoreClient():

    def setup_client(self):
        return datastore.Client()
