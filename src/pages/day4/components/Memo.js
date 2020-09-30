import React, { useEffect } from "react";

function Meno(props) {
  useEffect(() => {
    console.log("render Meno Component");
  });

  return (
    <div>
      <p>value的值是：{props.value}</p>
      <p>name的值是：{props.name}</p>
      <p>other {props.other.aaa}</p>
    </div>
  );
}

export default React.memo(Meno);
