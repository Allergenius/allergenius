import React from "react";

const Card = props => (
    <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
            <h5 className="card=title">{props.startDate}</h5>
            <p className="card-text">Foods Eaten:</p>
            <ul>
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
        </div>
    </div>
)

export default Card;