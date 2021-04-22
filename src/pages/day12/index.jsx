import React, { useState } from "react";
import { Drawer } from "./components/drawer";
import "./index.css";

// const Day12 = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div>
//       <div>12313123</div>
//       <button onClick={() => setOpen(!open)}>打开抽屉</button>
//       <Drawer showMask={true} open={open} handler={false} level={null} >
//         <div className={"test"}>抽屉
//           <ul>
//             <li>1</li>
//             <li>1</li>
//             <li>1</li>
//             <li>1</li>
//             <li>1</li>
//             <li>1</li>
//           </ul>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

const Day12 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Drawer width="250px" open={open} showMask={true}>
        <div>112313</div>
        <div>112313</div>
      </Drawer>
      <div
        style={{
          width: "100%",
          height: 667,
          background: "#fff000",
          color: "#fff",
          textAlign: "center",
          lineHeight: "667px",
        }}
      >
        <span onClick={() => setOpen(!open)}>内容区块</span>
      </div>
    </div>
  );
};

export default Day12;
