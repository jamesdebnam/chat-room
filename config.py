import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):
  # Secret key seems to be used for form validation?
  SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
  # The flask-sqlalchemy extension takes location of api's database from the 
  # URI config variable below
  SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
  # This is disabled, normally it would signal the app every time a change was 
  # about to be made to the database
  SQLALCHEMY_TRACK_MODIFICATIONS = False
