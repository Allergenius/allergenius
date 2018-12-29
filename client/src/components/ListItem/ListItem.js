import React from "react";

const ListItem = props => (
    <li id={props.id} key={props.id}>{props.date} {props.type}</li>
)

export default ListItem;