import flask
import pandas as pd
import tensorflow as tf
import keras
keras.__version__
from keras.models import load_model
from flask_cors import CORS, cross_origin

# instantiate flask
app = flask.Flask(__name__)
CORS(app)

# we need to redefine our loss function in order to use it when loading the model
def auc(y_true, y_pred):
    auc = tf.metrics.auc(y_true, y_pred)[1]
    keras.backend.get_session().run(tf.local_variables_initializer())
    return auc

# load the model, and pass in the custom loss function
global graph
graph = tf.get_default_graph()
model = load_model('mlp-imbalanced-data.h5', custom_objects={'auc': auc})

# define a predict function as an endpoint
@app.route("/predict", methods=["GET", "POST"])
def predict():
    data = {"success": False}
    params = flask.request.form
    print(flask.request.form)
    if (params == None):
        params = flask.request.form
    # if parameters are found, echo the msg parameter
    if (params != None):
        x = pd.DataFrame.from_dict(params, orient='index').transpose()
        print(x)
        with graph.as_default():
            data["prediction"] = str(model.predict_classes(x))
            data["success"] = True

    # return a reponse in json format
    print(data)
    return flask.jsonify(data)

# start the flask app, allow remote connections
app.run(host='0.0.0.0')
