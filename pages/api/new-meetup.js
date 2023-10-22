import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const Data = req.body;

        const client = await MongoClient.connect("mongodb+srv://shubhammahulkar2000:kzQYs7j1pvM1P9aZ@cluster0.vjt37af.mongodb.net/meetupdata?retryWrites=true&w=majority");

        const db = client.db();

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(Data)

        console.log(result)

        client.close()
        res.status(201).json({ message: "Data Inserted" })

    }
}

export default handler;