import React, { Component } from "react";
import axios from "axios";
import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import Warning from "../../components/Warning/Warning"
// import List from "../../components/List/List";
// import ListItem from "../../components/ListItem/ListItem";


moment.locale("en");
const localizer = BigCalendar.momentLocalizer(moment);

class HomePage extends Component {
    state = {
        username: "",
        reactions: [],
        selectedDate: new Date(),
        selectedEvent: "",
    }

    componentDidMount = () => {
        document.body.className="body-non-login"
        var username = "testUser"
        axios.get("/api/reactions/" + username)
            .then(res => {
                const reactions = res.data;
                for (let i = 0; i < reactions.length; i++) {
                    reactions[i].start = moment.utc(reactions[i].start).toDate();
                    reactions[i].end = moment.utc(reactions[i].end).toDate();
                }
                console.log(reactions)
                this.setState({reactions: reactions })
            })
    }

    clickAdd = () => {
        this.props.history.push("/reactionform");
    }

    clickAddProfile = () => {
        this.props.history.push("/addprofile");
    }

    clickEditProfile = () => {
        this.props.history.push("/editprofile");
    } 
    
    handleEventSelect = (event) => {
        this.props.history.push("/reactions/" + event.id)
        console.log(event)
        console.log(event.id)
    }

    render() {
        return (
            <div>
                <BigCalendar
                    className="calendar-container"
                    localizer={localizer}
                    events={this.state.reactions}
                    style={{ height: 500, width: this.state.width }}
                    selectable={true}
                    toolbar={true}
                    startAccessor="start"
                    endAccessor="end"
                    views={["month", "week", "day"]}
                    defaultView="month"
                    onView={() => {}}
                    date={this.state.selectedDate}
                    onNavigate={date => this.setState({ selectedDate: date })}
                    onSelectEvent={(event) => this.handleEventSelect(event)}
                />
                {/* <List>
                    {this.state.reactions.map(reaction => (
                        <ListItem
                        id={reaction.id}
                        key={reaction.id}
                        date={reaction.reactionTime}
                        severity={reaction.severity}
                        notes={reaction.Notes}
                        />
                    ))}
                </List> */}
                <br />
                <footer>
                    <Warning />
                </footer>
            </div>
        )
    }
}

export default HomePage;