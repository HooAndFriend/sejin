import { useState } from "react"
import Div from "./Div"
import Listarr from "./Listarr"

export default function Arr() {
  const [count, setCount] = useState(0)

  const ChangeFile = () => {
    if (count === 0) {
      return <Listarr />
    } else if (count === 1) {
      return <Div />
    }
  }

  return (
    <div>
      <button onClick={(e) => setCount(0)}>List</button>
      <button onClick={(e) => setCount(1)}>Div</button>
      <ChangeFile /> {/*질문2.. ChangeFile이 대체 뭔가요..? */}
    </div>
  )
}