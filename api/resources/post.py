from flask import request, jsonify 
from flask_restful import Resource, abort
from api.models import Post, db
from api.schema import post_schema, posts_schema



class PostSingle(Resource):
  def get(self, id):
    post_to_get = Post.query.get_or_404(id)
    return post_schema.jsonify(post_to_get)
  
  def delete(self, id):
    post_to_delete = Post.query.get_or_404(id)
    db.session.delete(post_to_delete)
    db.session.commit()
    return 'Success', 204
  
  def put(self, id):
    post_to_update = Post.query.get_or_404(id)

    body = request.json['body']
    post_to_update.body = body
    db.session.commit()
    return post_schema.jsonify(post_to_update)
