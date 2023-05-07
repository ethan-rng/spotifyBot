from flask import Flask, request, send_file, Response
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import firebase_admin
from firebase_admin import firestore, credentials
import config
import numpy as np
import pandas as pd
import pandas_market_calendars as mcal
import pickle

# $ pip install --upgrade firebase-admin ipython

# FLASK API
app = Flask(__name__)
CORS(app)
api = Api(app)

STOCK = "AAPL"
# Initiating Pickle Files
with open("model.pkl", "rb") as model:
    model = pickle.load(model)

with open("df.pkl", "rb") as df:
    df = pickle.load(df)

# FIRESTORE DATA-BASE
cred = credentials.Certificate("config.json")
firestoreApp = firebase_admin.initialize_app(cred)
firestore_client = firestore.client()

# Playlist OBJECT
playlist_put_args = reqparse.RequestParser()
playlist_put_args.add_argument("link", type=str, help="please insert a link")


class Playlist(Resource):
    def get(self):
        return send_file("test.mp3", mimetype="audio/mpeg")

    def post(self):
        args = playlist_put_args.parse_args()
        return {"HIII": args}


def predictFuture(df, model, days):
    nyse = mcal.get_calendar('NYSE')
    schedule = nyse.schedule(start_date='today', end_date='2027-12-31')

    for i in range(days):
        # Generating New Prediction
        row = df.shape[0]
        predictionData = df.drop(["Date", "Close"], axis="columns").iloc[row - 1]
        newPrediction = model.predict(np.array(predictionData).reshape(1, -1))

        # Adding New Values and appending to df
        row = df.shape[0]
        newDf = pd.DataFrame({
            "Date": schedule.iloc[i].name,
            "Close": newPrediction,
            "Prev_Close": df["Close"].iloc[row - 1],
            "EMA 6": df["Prev_Close"].ewm(span=6).mean().iloc[-1],
            "EMA 18": df["Prev_Close"].ewm(span=18).mean().iloc[-1],
            "EMA 60": df["Prev_Close"].ewm(span=60).mean().iloc[-1],
            "EMA 120": df["Prev_Close"].ewm(span=120).mean().iloc[-1],
            "EMA 200": df["Prev_Close"].ewm(span=200).mean().iloc[-1],
            "MACD": df["Prev_Close"].ewm(span=60).mean().iloc[-1] - df["Prev_Close"].ewm(span=6).mean().iloc[-1],
            "MACD Signal": df["MACD"].ewm(span=9).mean().iloc[-1]
        })

        df = pd.concat([df, newDf], axis=0)
    return df


class mlModel(Resource):
    def get(self, numDays):
        print("HIIIIII")
        close = predictFuture(df, model, numDays)["Close"]
        return {"close": list(close)[-numDays:]}


api.add_resource(Playlist, "/playlist/")
api.add_resource(mlModel, "/model/<int:numDays>")


@app.route("/")
def base():
    return "hello World"

@app.route("/test")
def stream():
    def generate():
        with open("test.mp3", "rb") as file:
            data = file.read(1024)
            while data:
                yield data
                data = file.read(1024)
    return Response(generate(), mimetype="audio/mpeg")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
