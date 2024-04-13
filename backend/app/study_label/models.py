import uuid

from google.appengine.ext import ndb


# Create your models here.
class StudyLabel(ndb.Model):
    study_label_id = ndb.StringProperty()
    study_label_name = ndb.StringProperty()
