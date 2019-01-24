import React, { Component } from "react";
import axios from "axios";
import BigCalendar from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import Container from "../../components/Container/Container";
import Warning from "../../components/Warning/Warning"
import jwt_decode from 'jwt-decode';
import Header from "../../components/Header/Header";
import AddButton from "../../components/Buttons/AddButton";
import "./HomePage.css";

moment.locale("en");
const localizer = BigCalendar.momentLocalizer(moment);

var objectToCsv = function(data) {
    const csvRows = [];

    //get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    //loop over the rows
    for (const row of data) {
        const values = headers.map(header => {
            const escaped = (''+row[header]).replace (/"/g, '\\"');
            return `"${escaped}"` 
        })
        csvRows.push(values.join(","));
    }

    return csvRows.join("\n")
}

var download = function(data){
    //Create the actual csv file as a blob object
    const blob = new Blob([data], {type: "text/csv"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a")
    a.setAttribute("hidden", "");
    a.setAttribute("href", url)
    a.setAttribute("download", "reactions.csv")
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
        first_name: "",
        last_name: "",
        id: "",
        email: "",
        reactions: [],
        selectedDate: new Date(),
        selectedEvent: ""
        }
    }
    // state = {
    //     first_name: "",
    //     last_name: "",
    //     id: "",
    //     email: "",
    //     reactions: [],
    //     selectedDate: new Date(),
    //     selectedEvent: ""
    // }
    componentWillMount = () => {
        // new
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        // console.log(decoded)
        this.setState({
            // first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            id: decoded.id
        })
    }

    exportCsv = (e) => {
        e.preventDefault();
    
        var username = this.state.id
    
        axios.get("/api/reactions/" + username)
            .then(res => {
                //Special thanks to https://www.youtube.com/watch?v=eicLNabvZN8 
                const csvData = objectToCsv(res.data);
                download(csvData)
            })
    }

    componentDidMount = () => {
        axios.get('/api/profile/' + this.state.id)
        .then(res => {
            if (res.data.length === 0) {
                window.location.href = "/addprofile"
            } else {
                console.log(res.data)
                this.setState({first_name: res.data[0].first_name})
            }})
        .catch(err => {
            console.log(err)
        })

        document.body.className="body-non-landing"
        console.log("USER ID:" + this.state.id)
        axios.get("/api/reactions/" + this.state.id)
            .then(res => {
                const reactions = res.data;
                for (let i = 0; i < reactions.length; i++) {
                    reactions[i].start = moment.utc(reactions[i].start).toDate();
                    reactions[i].end = moment.utc(reactions[i].end).toDate();
                }
                this.setState({reactions: reactions })
            })
    }

    clickAdd = () => {
        this.props.history.push("/reactionform");
    }

    // clickaddProfile = () => {
    //     this.props.history.push("/addprofile");
    // }

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
            <Container>
                <Warning />
                <Header username={this.state.first_name} />
                <div className="d-flex justify-content-between">
                    <div className="p-2">
                        <AddButton clickAdd={this.clickAdd} />
                    </div>
                    <div className="p-2">
                         <button
                    onClick={this.exportCsv}
                    className="btn border border-secondary btn-homepage"
                         >
                            <i className="cui-cloud-download"> </i>Export Reactions to .CSV
                        </button>
                    </div>
                </div>
                
                <div className="container rounded calendarDiv">
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
                </div>
            </Container>
        )
    }
}

export default HomePage;