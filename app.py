from flask import Flask, render_template, request, jsonify
from data import books , users

app = Flask(__name__)




@app.route('/')
def home():
    return render_template('index.html', dict=[],message = "")

@app.route('/search', methods=['GET'])
def search():
    keyword = request.args.get('keyword').lower()
    dict = []
    for i in books:
        if keyword in i['title'].lower() or  keyword in i['author'].lower():  
            dict.append(i)
    if len(dict) == 0:          
        return render_template('index.html',dict= [],message = "No Search Result Found")
    else:
        return render_template('index.html',dict = dict,message = str(len(dict))+" Search Results Found")

@app.route('/login', methods=['GET'])
def login():
    email = request.args.get('email')
    password = request.args.get('password')
    for i in users:
        if email == i['email'] and password == i['password']:
            name = i['name']
            return render_template('user.html', dict=[],message = '' ,user = name)
    return render_template('user.html', dict=[],message = '' ,user = 'name')

if __name__ == '__main__':
    app.run(debug=True)
