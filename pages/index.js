import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

function HomePage(props) {

  return (
    <MeetupList meetups={props.meetups} />
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