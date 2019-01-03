import React, { Component } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import AddButton from "../../components/AddButton/AddButton";

class HomePage extends Component {
    state = {
        username: "",
        reactions: []
    }

    componentDidMount = () => {
        axios.get("/api/reactions/")
            .then(res => {
                const reactions = res.data;
                this.setState({reactions: reactions })
            })
    }

    clickAdd = () => {
        this.props.history.push("/reactionform");
    }

    render() {
        return (
            <Container>
                <Header username={this.state.username} />
                <List>
                    {this.state.reactions.map(reaction => (
                        <ListItem
                        id={reaction.id}
                        key={reaction.id}
                        date={reaction.reactionTime}
                        />
                    ))}
                </List>
                <AddButton clickAdd={this.clickAdd}/>
            </Container>
        )
    }
}

export default HomePage;