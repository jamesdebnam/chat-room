from api import ma

class PostSchema(ma.Schema):
  class Meta:
    fields = ('id','body', 'timestamp', 'user_id')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

class UserSchema(ma.Schema):
  class Meta:
    fields = ('id', 'username')

user_schema = UserSchema()