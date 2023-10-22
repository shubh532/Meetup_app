import MeetupDatails from "@/components/meetups/meetDetails";

function meetupDatails() {
    return (
        <MeetupDatails
            image="/meeting.jpg"
            title="First Meet"
            address="somewhere on earth"
            description="meet for somthing"
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: { meetupId: "m3" }
            }, {
                params: { meetupId: "m2" }
            }
        ]
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId)
    return {
        props: {
            id: meetupId,
            image: "/meeting.jpg",
            title: "First Meet",
            address: "somewhere on earth",
            description: "meet for somthing",
        }
    }
}
export default meetupDatails;