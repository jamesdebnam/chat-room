from flask import  request 
from flask_restful import Resource

chats ={ 
  1:'test 1',
  2:'test 2'

}

class ChatList(Resource):
  def get(self):
    return chats

  def post(self):
    id = int(max(chats.keys())) +1
    chats[id] = request.form['data']
    return chats[id], 201