from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


class Song(Resource):
    def get

api.add_resource()

if __name__ == "__main__":
    app.run(debug=True)