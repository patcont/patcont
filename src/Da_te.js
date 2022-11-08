import React from "react";
import Moment from "react-moment";
import Button from "react-bootstrap/Button";

export default function Da_te() {
  const date = new Date();

  return (
    <div>
      <Button variant="primary">Comenzar nuevo ciclo</Button>
    </div>
  );
}
