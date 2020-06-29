from flask import Flask
from flask_restful import  Api
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from api.resources.chat import Chat
from api.resources.chat_list import ChatList

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
api= Api(app)


api.add_resource(Chat, '/api/<int:id>')
api.add_resource(ChatList, '/api')

from api import models

if __name__ == '__main__':
    app.run(debug=True)