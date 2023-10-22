import { Fragment } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>MeetUp App</title>
        <meta 
        name='description'
        content='this is a good meeting app than google meet'
        />
      </Head>

    <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://shubhammahulkar2000:kzQYs7j1pvM1P9aZ@cluster0.vjt37af.mongodb.net/meetupdata?retryWrites=true&w=majority");

  const db = client.db();

  const meetupsCollection = db.collection('meetups')
  const meetUps = await meetupsCollection.find().toArray()

  return {
    props: {
      meetups: meetUps.map(meet=>({
        title:meet.title,
        image:meet.image,
        address:meet.address,
        id:meet._id.toString()

      }))
    },
    revalidate: 1
  }
}

export default HomePage;