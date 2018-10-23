import React from "react";
import "./FriendCard.css";

const FriendCard = (props) => (
  <span className="click" onClick={() => props.changeClickState(props.id)}>
    <div className="card card-base">
      <div className="img-container align-middle">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </span>
);

export default FriendCard;
