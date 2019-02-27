import React from "react";
import DeleteButton from "../Buttons/DeleteButton";

const Card = props => (
    <div className="card mx-auto w-50">
        <div className="card-header header-1 d-flex justify-content-between">{props.title}
        </div>
        <div className="card-body">
        <span className="card-date">{props.date}</span>
            <h5 className="card-title pb-1">{props.startDate} - {props.endDate}</h5>
            <p className="card-text content-1">Foods Eaten:</p>
            <ul className="card-eaten content-2">
                { props.foodBerries === 1 && <li>Berries</li> }
                { props.foodCelery === 1 && <li>Celery</li> }
                { props.foodCorn === 1 && <li>Corn</li> }
                { props.foodDairy === 1 && <li>Dairy</li> }
                { props.foodEggs === 1 && <li>Eggs</li> }
                { props.foodFish === 1 && <li>Fish/Shellfish</li> }
                { props.foodGluten === 1 && <li>Gluten</li> }
                { props.foodOnions === 1 && <li>Onions/Garlic</li> }
                { props.foodPeanuts === 1 && <li>Peanuts</li> }
                { props.foodSesame === 1 && <li>Sesame</li> }
                { props.foodSoybeans === 1 && <li>Soybeans</li> }
                { props.foodTreeNuts === 1 && <li>Tree Nuts</li> }
            </ul>

            <p className="card-text content-1">Symptoms:</p>
            <ul className="content-2">
                { props.sympCramps === 1 && <li>Abdominal Cramps</li> }
                { props.sympCough === 1 && <li>Coughing or Weezing</li> }
                { props.sympDiffBreathing === 1 && <li>Difficulty Breathing</li> }
                { props.sympDizzy === 1 && <li>Dizziness And/Or Lightheadedness</li> }
                { props.sympFaceSwelling === 1 && <li>Face, Tongue, Or Lip Swelling</li> }
                { props.sympHives === 1 && <li>Hives</li> }
                { props.sympItchyEyes === 1 && <li>Itchy Eyes</li> }
                { props.sympItchyMouth === 1 && <li>Tingling Or Itchy Sensation In The Mouth</li> }
                { props.sympItchySkin === 1 && <li>Itchy Skin</li> }
                { props.sympItchyThroat === 1 && <li>Itchy Throat</li> }
                { props.sympLossOfConsciousness === 1 && <li>Loss of Consciousness</li> }
                { props.sympRash === 1 && <li>Flushed Skin Or Rash</li> }
                { props.sympRunnyNose === 1 && <li>Runny Nose</li> }
                { props.sympStomachAche === 1 && <li>Stomach Ache</li> }
                { props.sympThroatSwelling === 1 && <li>Swelling Of The Throat And Vocal Cords</li> }
                { props.sympVomiting === 1 && <li>Vomiting And/Or Diarrhea</li> }
            </ul>
            <p className="card-text content-1">Notes:</p>
            <p className="content-2">{props.notes}</p>
            <DeleteButton clickDelete={props.clickDelete} />
        </div>
    </div>
)

export default Card;