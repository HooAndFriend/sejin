/*  일렬로 출력 */

export default function Listarr() {
  const arr = ["one", "two", "three"]
  const arrList = arr.map( (item) => <li>{item}</li> )
  return (
    <div>
      <h1>List</h1>
      <ul>{arrList}</ul>
    </div>
  )
  }