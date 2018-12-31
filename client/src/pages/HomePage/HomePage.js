import React, { Component } from "react";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import List from "../../components/List/List";
// import ListItem from "../../components/ListItem/ListItem";
import AddButton from "../../components/AddButton/AddButton";

class HomePage extends Component {
    state = {
        username: "",
        reactions: ""
    }

    // componentDidMount = () => {


    //     this.setState({reactions: })
    // }

    // clickAdd = () => {

    // }

    render() {
        return (
            <Container>
                <Header username={this.state.username} />
                <List>
                    {/* {this.state.reactions.map(reaction => (
                        <ListItem
                        id={reaction.id}
                        key={reaction.id}
                        date={reaction.date}
                        type={reaction.type}
                        />
                    ))} */}
                </List>
                <AddButton clickAdd={this.clickAdd}/>
            </Container>
        )
    }
}

export default HomePage;