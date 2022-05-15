/* 3 x n으로 출력 */

export default function Div() {
  const arr = ["one", "two", "three", "four", "five", "six", "seven"]

  const row=[];
  let k=0;
  for(let i=0; i<3; i++){
    const col=[];
    for(let j=0; j<3; j++){
      if(k>arr.length-1) break;
      col.push(arr[3*i+j]+" ")
      k++;
    }
    row.push(<div key={k}>{col}</div>); 
    
  }
  
  return (
    <div>
      <h1>Div</h1>
      {row}
    </div>
  )
}