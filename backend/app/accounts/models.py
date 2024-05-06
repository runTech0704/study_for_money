import uuid

from google.cloud import ndb

# Create your models here.
class User(ndb.Model):
	user_id = ndb.StringProperty()
	password = ndb.StringProperty()
	username = ndb.StringProperty()
	wallet = ndb.IntegerProperty(default=0, min_value=0)
	is_author = ndb.BooleanProperty(default=False)
