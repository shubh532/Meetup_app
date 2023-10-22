import classes from "../meetups/meetupdetails.module.css"


function MeetupDatails(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt="meet img" />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>t{props.description}</p>
        </section>
    );
}

export default MeetupDatails;