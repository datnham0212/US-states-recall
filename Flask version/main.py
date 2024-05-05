us_states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]


from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", states_list=us_states, content="This is my first Flask app")

# @app.route('/<name>')
# def user(name):
#     if name == "Đạt":
#         return "Welcome back, " + name
#     else:
# 	    return f"Hello, world! My name is {name} <h1>This is my first Flask app</h1>."

# @app.route('/admin')
# def admin():
#     return redirect(url_for("user", name="Đạt"))

# @app.route('/game')
# def game():
#     count = 0
#     print('Name a US state: ')
#     while True:
#         n = input()
#         if n not in us_states:
#             print('You lose' + '    Score: ' + str(count))
#             break
#         else:
#             count+=1
#         if count == len(us_states):
#             print('You win!')
#             break

# app.run(port=5000)

if __name__ == "__main__":
    app.run()