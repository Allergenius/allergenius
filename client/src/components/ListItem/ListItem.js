import React from "react";

const ListItem = props => (
    <li id={props.id} key={props.id}>{props.date} {props.notes} {props.severity}</li>
)

export default ListItem;