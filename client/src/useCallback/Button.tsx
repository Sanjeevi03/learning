import React, { memo } from "react";

interface Props {
  handleClick: () => void
  children: React.ReactNode
}

export const Button = memo(({handleClick, children}:Props) => {
  console.log(children)
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
})