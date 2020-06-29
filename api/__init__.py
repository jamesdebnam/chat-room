from flask import Flask
from flask_restful import  Api
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
api= Api(app)
ma = Marshmallow(app)

# from api import schema
from api import models
from api.resources.post import PostSingle
from api.resources.post_list import PostList
from api.resources.login import Login, Register


api.add_resource(PostSingle, '/posts/<int:id>')
api.add_resource(PostList, '/posts')
api.add_resource(Login, '/login/<string:username>')
api.add_resource(Register, '/login')


if __name__ == '__main__':
    app.run(debug=True)
    