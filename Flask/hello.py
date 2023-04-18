from flask import Flask, request, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
import csv
import os
from foo import fun
app = Flask(__name__)
cors = CORS(app)
UPLOAD_FOLDER = './files'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER 


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file found', 400

    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'],filename))
    print(file.filename)
    return 'File uploaded successfully'

@app.route('/data',methods=['POST'])
def recieve_data():
    data=request.get_json()
    period=data['option']
    duration=data['value']
    print(fun(period,duration))
    return data 

@app.route('/file/<filename>')
def image(filename):
    return send_from_directory('files',filename)

if __name__ == "__main__":
    app.run(debug=True)