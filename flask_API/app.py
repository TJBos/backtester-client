from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    response = { 'item': 'number1', 'another': 4 }
    return response

@app.route('/add', methods=['POST'])
def add():
    print(request.json)
    return { "response": "OK "}

if __name__ == "__main__":
    app.run(debug=True)
