import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import "./Spinner.scss";

interface propsTypes {
  loading: boolean;
  text:string
}

export default function Loader({loading, text}: propsTypes):JSX.Element | null{
  if(loading){
    return (
      <div className="spinner-wrapper">
        <Spinner animation="border" variant="light" />
        <span>{text}</span>
      </div>
    );
  }
  return null;
};
