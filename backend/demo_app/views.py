from django.shortcuts import render
from django.http import HttpResponse
from google.cloud import ndb


client = ndb.Client()

class Person(ndb.Model):
    name = ndb.StringProperty()
    age = ndb.IntegerProperty()

def create_person():
    with ndb.Client().context():
        person = Person(name="John Doe", age=30)
        person.put()
        print(f"Saved {person.name} with age {person.age}")

def list_persons(request):
    create_person()

    with client.context():
        # Person エンティティのクエリを作成
        query = Person.query()
        persons = query.fetch()

        # HTMLレスポンスの構築
        response_content = '<h1>Person List</h1>'
        for person in persons:
            response_content += f'<div>{person.name}, Age: {person.age}</div>'

        return HttpResponse(response_content)
