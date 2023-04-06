import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";

const CheckMe = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
    </div>
  );
};

export default CheckMe;
