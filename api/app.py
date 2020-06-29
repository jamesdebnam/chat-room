from flask import Flask, request 
from flask_restful import Resource, Api, abort

app = Flask(__name__)
api= Api(app)

chats ={ 
  1:'hello motherfucker',
  2:'sup bitch'

}

def check_chat_exists(id):
  if id not in chats:
    abort(404, message='Chat with id {} doesn\'t exist'.format(id))

class Chat(Resource):
  def get(self, id):
    check_chat_exists(id)
    return {id: chats[id]}
  
  def delete(self, id):
    check_chat_exists(id)
    del chats[id]
    return '', 204
  
  def put(self, id):
    check_chat_exists(id)
    chats[id] = request.form['data']
    return {id: chats[id]}, 201

class ChatList(Resource):
  def get(self):
    return chats

  def post(self):
    id = int(max(chats.keys())) +1
    chats[id] = request.form['data']
    return chats[id], 201

api.add_resource(Chat, '/api/<int:id>')
api.add_resource(ChatList, '/api')

if __name__ == '__main__':
    app.run(debug=True)