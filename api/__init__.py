from flask import Flask, request 
from flask_restful import Resource, Api
from api.resources.chat import Chat
from api.resources.chat_list import ChatList

app = Flask(__name__)
api= Api(app)






api.add_resource(Chat, '/api/<int:id>')
api.add_resource(ChatList, '/api')

if __name__ == '__main__':
    app.run(debug=True)