import React, {memo} from "react";

function Button({ handleClick, children }) {
  console.log(`This is ${children} BUTTON`)
  return <button onClick={handleClick}>{children}</button>;
}

export default memo(Button);
