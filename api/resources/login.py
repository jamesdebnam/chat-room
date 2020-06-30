from flask import request, jsonify 
from flask_restful import Resource, abort
from api.models import User, db
from api.schema import user_schema



class Login(Resource):
  def get(self, username):
    user_to_get = User.query.filter_by(username=username).first()
    if user_to_get:
      return user_schema.jsonify(user_to_get)
    abort(404, message="username {} doesn't exist".format(username))
  
class Register(Resource):
  def post(self):
    try:
      username = request.json['username']
  
      new_user = User(username)
      db.session.add(new_user)
      db.session.commit()
      return user_schema.jsonify(new_user)
    except:
      abort(400, message="username {} already exists".format(request.json['username']))

class UserIdFind(Resource):
  def get(self, id):
    user_to_get = User.query.get(id)
    return user_schema.jsonify(user_to_get)