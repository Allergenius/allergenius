import React, { Component } from "react";
import axios from "axios";
import moment from 'moment'
import Card from "../../components/Card/Card";

moment().format();

class ReactionPage extends Component {
    state = {
        reactions: [],
    }

    componentDidMount = () => {
        document.body.className="body-non-login"
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
            <div>
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
            </div>
        )
    }
}

export default ReactionPage;