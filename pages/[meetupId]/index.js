import MeetupDatails from "@/components/meetups/meetDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";



function meetupDatails(props) {

    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                name="Somthing Else"
                content={props.meetupData.description}
                />
            </Head>
            <MeetupDatails
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://shubhammahulkar2000:kzQYs7j1pvM1P9aZ@cluster0.vjt37af.mongodb.net/meetupdata?retryWrites=true&w=majority");

    const db = client.db();

    const meetupsCollection = db.collection('meetups')
    const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray()
    client.close()
    return {
        fallback: false,
        paths: meetupIds.map(meet => ({
            params: { meetupId: meet._id.toString() }
        }))
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect("mongodb+srv://shubhammahulkar2000:kzQYs7j1pvM1P9aZ@cluster0.vjt37af.mongodb.net/meetupdata?retryWrites=true&w=majority");

    const db = client.db();

    const meetupsCollection = db.collection('meetups')
    const MeetUp = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) })
    client.close()
    return {
        props: {
            meetupData: {
                id: MeetUp._id.toString(),
                title: MeetUp.title,
                description: MeetUp.description,
                image: MeetUp.image,
                address: MeetUp.address
            }
        }
    }
}
export default meetupDatails;