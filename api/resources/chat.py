from flask import Flask, request 
from flask_restful import Resource, abort

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
