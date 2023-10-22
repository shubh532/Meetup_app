import MeetupList from '../components/meetups/MeetupList';
import Layout from '@/components/layout/Layout';

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image: "/meeting.jpg",
    address: "Some Where on Earth",
    description: "disccussion on the global warning"
  }, {
    id: "m2",
    title: "Second meetup",
    image: "/meeting.jpg",
    address: "Some Where on Earth",
    description: "disccussion on the scarcity of water"
  }, {
    id: "m3",
    title: "Third meetup",
    image: "/meeting.jpg",
    address: "Some Where on Earth",
    description: "disccussion on the pullution"
  }
]

function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage;