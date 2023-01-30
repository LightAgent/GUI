from flask import Flask, request
from flask_cors import CORS
from filemanger import Filemanger
import json
import os

HTTP_SUCCESS = 200
HTTP_BAD_REQUEST = 400
HTTP_NOT_FOUND = 404

app = Flask(__name__)
CORS(app)

@app.route("/save", methods=['GET'])
def save():
    config = request.args.get('config')
    u = request.args.get('u')
    d = request.args.get('d')
    f = request.args.get('f')
    b = request.args.get('b')
    r = request.args.get('r')
    l = request.args.get('l')
    fileManger = Filemanger(config)
    if fileManger.save(u,d,f,b,r,l):
        return "Success", HTTP_SUCCESS
    print("ERROR!!!")
    return "Fail", HTTP_BAD_REQUEST

@app.route("/load", methods=['GET'])
def load():
    config = request.args.get('config')
    fileManger = Filemanger(config)
    data = fileManger.load()
    if data:
        print(data)
        return data, HTTP_SUCCESS
    print("ERROR!!!")
    return "Fail", HTTP_BAD_REQUEST

if __name__ == "__main__":
  app.run()