import { memo } from "react";

interface Props {
  title: string
  count: number
}
export const Count = memo(({title, count}:Props) => {
  console.log("Count render")
  return (
    <div>
      <h1>{title} - {count}</h1>
    </div>
  )
})
