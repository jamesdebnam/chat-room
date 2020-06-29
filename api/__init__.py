from flask import Flask
from flask_restful import  Api
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
api= Api(app)

from api import models
from api.resources.post import PostSingle
from api.resources.post_list import PostList


api.add_resource(PostSingle, '/api/<int:id>')
api.add_resource(PostList, '/api')


if __name__ == '__main__':
    app.run(debug=True)
    
from api import models
from api.resources.post import Post
from api.resources.pos