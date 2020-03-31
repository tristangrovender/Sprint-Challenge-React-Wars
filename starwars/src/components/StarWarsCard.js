import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const StarWardsCard = props => {
    console.log(props);
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    <CardText>{props.hair_color}</CardText>
                    <CardText>{props.skin_color}</CardText>
                    <CardText>{props.eye_color}</CardText>
                    <CardText>{props.gender}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default StarWardsCard;
