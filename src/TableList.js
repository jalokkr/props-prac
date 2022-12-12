import { useContext } from "react"
// import { useState } from "react"

export default function TableList(props){
  // const [strikehan, setStrikehan] = useState(false);
  
  const handleClick = event => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
      event.target.style.removeProperty('color');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
      event.target.style.setProperty('color', 'black');

    }
  };
  return(
    <>
      <span onClick={handleClick}>{props.value}</span>
    </>
  )
}