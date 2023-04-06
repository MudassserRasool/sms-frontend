// import React from 'react'
// import { Popover, Button } from '@mui/material';
// const Example = () => {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//   return (
//     <div style={{ display: "block", padding: 30 }}>
//       <h4>How to use Popover Component in ReactJS?</h4>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={(event) => {
//           setAnchorEl(event.currentTarget);
//         }}
//       >
//         Click me to open Popover
//       </Button>
//       <Popover
//         anchorEl={anchorEl}
//         open={open}
//         id={open ? "simple-popover" : undefined}
//         onClose={() => {
//           setAnchorEl(null);
//         }}
//         transformOrigin={{
//           horizontal: "center",
//           vertical: "top",
//         }}
//         anchorOrigin={{
//           horizontal: "center",
//           vertical: "bottom",
//         }}
//       >
//         How are you?
//       </Popover>
//     </div>
//   )
// }

// export default Example