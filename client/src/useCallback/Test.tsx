import { memo } from "react";

export const Test = memo(() => {
  console.log("Test render")
  return (
    <div>
      <h1>Test</h1> 
    </div>
  );
});
