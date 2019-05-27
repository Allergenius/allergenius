import React, { Component } from "react";
import axios from "axios";
import moment from 'moment';
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import BackButton from "../../components/Buttons/BackButton";
import './ReactionPage.css';
import jwt_decode from 'jwt-decode';

moment().format();

class ReactionPage extends Component {
    state = {
        id: '',
        reactions: []
    }

    componentDidMount = () => {
        document.body.className="body-non-landing"
        console.log(this.props.location.pathname)
        axios.get("/api" + this.props.location.pathname + "/" + this.state.id)
        .then(res => {
            const reactions = res.data;
            for (let i = 0; i < reactions.length; i++) {
                reactions[i].start = moment(reactions[i].start).format('LT');
                reactions[i].startDate = moment(reactions[i].startDate).format('LL');
                reactions[i].end = moment(reactions[i].end).format('LT');
            }
            console.log(reactions)
            this.setState({ reactions: reactions })
        })
    }

    componentWillMount = () => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            // first_name: decoded.first_name,
            // last_name: decoded.last_name,
            email: decoded.email,
            id: decoded.id
        })
    }

    clickBack = () => {
        this.props.history.push("/home");
    }

    clickDelete = () => {
        axios.delete('/api/reactions/' + this.state.reactions[0].id)
        .then(res =>{
            console.log(res);
            alert("Reaction deleted successfully!")
            this.props.history.push("/home")
        })
    }

    render() {
        return (
            <Container>
                <BackButton clickBack={this.clickBack}/>
                {this.state.reactions.map(reaction => (
                    <Card
                    clickDelete={this.clickDelete}
                    key={reaction.id}
                    title={reaction.title}
                    startDate={reaction.start}
                    date={reaction.startDate}
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
                    sympCramps={reaction.symp_AbdominalCramps}
                    sympCough={reaction.symp_Cough}
                    sympDiffBreathing={reaction.symp_DifficultBreathing}
                    sympDizzy={reaction.symp_Dizzy}
                    sympFaceSwelling={reaction.symp_FaceSwelling}
                    sympHives={reaction.symp_Hives}
                    sympItchyEyes={reaction.symp_ItchyEyes}
                    sympItchyMouth={reaction.symp_ItchyMouth}
                    sympItchySkin={reaction.symp_ItchySkin}
                    sympItchyThroat={reaction.symp_ItchyThroat}
                    sympLossOfConsciousness={reaction.symp_LossOfConsciousness}
                    sympRash={reaction.symp_Rash}
                    sympRunnyNose={reaction.symp_RunnyNose}
                    sympStomachAche={reaction.symp_StomachAche}
                    sympThroatSwelling={reaction.symp_ThroatSwelling}
                    sympVomiting={reaction.symp_VomitingDiarrhea}
                    severity={reaction.severity}
                    sickBool={reaction.sick}
                    />
                ))}
            </Container>
        )
    }
}

export default ReactionPage;