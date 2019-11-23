import json
import random

from flask import Flask

app = Flask(__name__)


@app.route('/pythonpassword')
def pythonpassword():
    generated = {
        "password": f'{"".join(random.sample([chr(character) for character in range(33, 127)], 15))}'
    }
    jsondata = json.dumps(generated)
    return jsondata
