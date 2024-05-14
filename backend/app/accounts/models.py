import bcrypt
import uuid

from google.cloud import ndb

# Create your models here.
class User(ndb.Model):
	user_id = ndb.StringProperty(required=False)
	password = ndb.StringProperty()
	username = ndb.StringProperty()
	wallet = ndb.IntegerProperty(default=0, min_value=0)
	is_author = ndb.BooleanProperty(default=False, required=False)

	def set_password(self, password):
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.hashed_password.encode('utf-8'))
