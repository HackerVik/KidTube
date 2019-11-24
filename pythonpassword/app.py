import random

from flask import Flask
from flask import jsonify

app = Flask(__name__)


@app.route('/pythonpassword')
def pythonpassword():
    return jsonify(password=f'{"".join(random.sample([chr(character) for character in range(33, 127)], 15))}')
