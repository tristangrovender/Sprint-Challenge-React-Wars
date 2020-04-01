import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const StarWardsCard = props => {
    // console.log(props);
    return (
        <div className="starwars-card">
            <Card>
                <CardBody>
                    <CardTitle>Space traveler</CardTitle>
                    <CardText>Name: {props.name}</CardText>
                    <CardText>Hair color: {props.hair_color}</CardText>
                    <CardText>Skin color: {props.skin_color}</CardText>
                    <CardText>Eye color: {props.eye_color}</CardText>
                    <CardText>Gender: {props.gender}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default StarWardsCard;
