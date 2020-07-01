from flask import request, jsonify 
from flask_restful import Resource, abort
from api.models import Post, db
from api.schema import post_schema, posts_schema


class PostList(Resource):
  def get(self,id):
    all_posts = Post.query.order_by(Post.id.desc()).paginate(id,3).items

    result = posts_schema.dump(all_posts)
    return jsonify(result)

  def post(self):
    body = request.json['body']
    user_id = request.json['user_id']

    new_post = Post(body, user_id)
    db.session.add(new_post)
    db.session.commit()
    return post_schema.jsonify(new_post)