import React, { Component } from "react";
import axios from "axios";
import moment from 'moment'
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";

moment().format();

class ReactionPage extends Component {
    state = {
        reactions: [],
    }

    componentDidMount = () => {
        console.log(this.props.location.pathname)
        axios.get("/api" + this.props.location.pathname + "/testUser")
        .then(res => {
            const reactions = res.data;
            for (let i = 0; i < reactions.length; i++) {
                reactions[i].start = moment.utc(reactions[i].start).toString();
                reactions[i].end = moment.utc(reactions[i].end).toDate();
            }
            console.log(reactions)
            this.setState({ reactions: reactions })
        })
    }

    render() {
        return (
            <Container>
                {this.state.reactions.map(reaction => (
                    <Card
                    key={reaction.id}
                    title={reaction.title}
                    startDate={reaction.start}
                    endDate={reaction.end}
                    notes={reaction.Notes}
                    foodBerries={reaction.food_Berries}
                    foodCelery={reaction.food_Celery}
                    foodCorn={reaction.food_Corn}
                    foodDairy={reaction.food_Dairy}
                    foodEggs={reaction.food_Eggs}
                    foodFish={reaction.food_Fish}
                    foodGluten={reaction.food_Gluten}
                    foodOnions={reaction.food_Onions}
                    foodPeanuts={reaction.food_Peanuts}
                    foodSesame={reaction.food_Sesame}
                    foodSoybeans={reaction.food_Soybeans}
                    foodTreeNuts={reaction.food_TreeNuts}
                    />
                ))}
            </Container>
        )
    }
}

export default ReactionPage;