from flask import Flask
from flask_restful import  Api
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
# from flask_cors import CORS

app = Flask(__name__, static_folder="../client/build", static_url_path='/')
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
api= Api(app)
ma = Marshmallow(app)
# CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

# from api import schema
from api import models
from api.resources.post import PostSingle
from api.resources.post_list import PostList, UserPostList
from api.resources.login import Login, Register, UserIdFind


api.add_resource(PostSingle, '/api/posts/<int:id>')
api.add_resource(PostList, '/api/posts/page/<int:id>')
api.add_resource(Login, '/api/login/<string:username>')
api.add_resource(Register, '/api/login')
api.add_resource(UserIdFind, '/api/user/<int:id>')
api.add_resource(UserPostList, '/api/posts/user')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))