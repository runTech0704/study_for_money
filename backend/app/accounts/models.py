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

	def set_password(self, inputted_password):
		password_bytes = inputted_password.encode('utf-8')
		hashed_password = bcrypt.hashpw(password_bytes, bcrypt.gensalt())
		self.password = hashed_password.decode('utf-8')

    def check_password(self, inputted_password):
		password_bytes = inputted_password.encode('utf-8')
		hashed_password_bytes = self.password.encode('utf-8')
		return bcrypt.checkpw(password_bytes, hashed_password_bytes)
