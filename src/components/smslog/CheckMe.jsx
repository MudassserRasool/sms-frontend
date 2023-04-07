import React , { useState, useRef } from "react";
import { Button, Popover, OverlayTrigger, Overlay  } from "react-bootstrap";

// const CheckMe = () => {
  // const popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Header as="h3">Popover right</Popover.Header>
  //     <Popover.Body>
  //       And here's some <strong>amazing</strong> content. It's very engaging.
  //       right?
  //     </Popover.Body>
  //   </Popover>
  // );
//   return (
//     <div>
      // <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      //   <Button variant="success">Click me to see</Button>
      // </OverlayTrigger>
//     </div>
//   );
// };

// export default CheckMe;



const CheckMe = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div ref={ref}>
    <Button onClick={handleClick}>Holy guacamole!</Button>

    <Overlay
      show={show}
      target={target}
      placement="bottom"
      container={ref}
      containerPadding={20}
    >
      <Popover id="popover-contained">
        <Popover.Header as="h3">Popover bottom</Popover.Header>
        <Popover.Body>
          <strong>Holy guacamole!</strong> Check this info.
        </Popover.Body>
      </Popover>
    </Overlay>
  </div>
  )
}

export default CheckMe