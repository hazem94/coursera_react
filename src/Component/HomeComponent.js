/** @format */

import React from "react";
import { FadeTransform } from "react-animation-components";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

function RenderItem({ item, isLoading, errMess }) {
  if (isLoading) return <Loading />;
  else if (errMess) return <h4>{errMess}</h4>;
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(1) translateY(-50%)"
      }}
    >
      <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

export default function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md m-1">
          <RenderItem
            item={props.dish}
            isLoading={props.dishIsLoading}
            errMess={props.DishErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderItem
            item={props.promotion}
            isLoading={props.promoIsLoading}
            errMess={props.promoErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderItem
            item={props.leader}
            isLoading={props.leaderIsLoading}
            errMess={props.leaderErrMess}
          />
        </div>
      </div>
    </div>
  );
}
