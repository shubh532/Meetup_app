import { useRouter } from "next/navigation";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetupPage() {
    const router = useRouter()
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json()
        console.log(data, "this is the data")
        router.push("/")
    }

    return (
        <Fragment>
            <Head>
                <title>New Meet</title>
                <meta
                    name="New Meeting"
                    content="Add new to Database"
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage;