import React from "react";

const ListItem = props => (
    <li id={props.id} key={props.id}>{props.reactionTime}</li>
)

export default ListItem;