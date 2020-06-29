from flask import request, jsonify 
from flask_restful import Resource, abort
from api.models import Post, db
from api.schema import post_schema, posts_schema



class PostSingle(Resource):
  def get(self, id):
    post_to_get = Post.query.get(id)
    return post_schema.jsonify(post_to_get)
  
  def delete(self, id):
    post_to_delete = Post.query.get(id)
    db.session.delete(post_to_delete)
    return 'Success', 204
  
  def put(self, id):
    post_to_update = Post.query.get(id)

    body = request.json['body']
    user_id = request.json['user_id']

    post_to_update.body = body
    post_to_update.user_id = user_id
    
    db.session.commit()
    return post_schema.jsonify(post_to_update)
