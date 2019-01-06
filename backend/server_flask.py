import os
from flask import Flask, send_from_directory, request, jsonify

# Path settings
SERVER_PATH = os.path.abspath(os.path.dirname(__file__))
FTP_PATH = os.path.abspath(os.path.join(SERVER_PATH, 'ftp/'))

# Flask app settings
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False


@app.route('/api/getFilesList', methods=['POST', 'GET'])
def api_get_files_list():
    files_list = os.listdir(FTP_PATH)
    files_list.sort()
    return jsonify({"list": files_list})


@app.route('/api/uploadFile', methods=['POST', 'GET'])
def api_upload_file():
    file = request.files['file']
    file_path = os.path.abspath(os.path.join(FTP_PATH, file.filename))
    file.save(file_path)
    return jsonify({})


@app.route('/api/downloadFile/<path:filename>', methods=['POST', 'GET'])
def api_download_file(filename):
    return send_from_directory(FTP_PATH, filename, as_attachment=True)


if __name__ == "__main__":
    if not os.path.exists(FTP_PATH):
        os.makedirs(FTP_PATH)
    app.run(debug=True)
