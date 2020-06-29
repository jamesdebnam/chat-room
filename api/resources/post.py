from flask import request 
from flask_restful import Resource, abort
from api.models import Post, db

chats ={ 
  1:'test 1',
  2:'test 2'

}

def check_post_exists(id):
  if id not in chats:
    abort(404, message='Chat with id {} doesn\'t exist'.format(id))

class PostSingle(Resource):
  def get(self, id):
    return {id: chats[id]}
  
  def delete(self, id):
    check_post_exists(id)
    del chats[id]
    return '', 204
  
  def put(self, id):
    new_post = Post(body=request.form['data'], user_id=1)
    db.session.add(new_post)
    db.session.commit()
    return 'New post created: {}'.format(request.form['data']), 201
