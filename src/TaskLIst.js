import React from 'react'
import TableList from './TableList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import { useState } from "react"


export default function(props) {
  // const [strikehan, setStrikehan] = useState(true);
  const listsItems = props.value;

  // const handleStrike=()=>{
  //   if(strikehan == false){
  //     setStrikehan(true)
  //   }else{
  //     setStrikehan(false)
  //   }
  // };

  const removeItem = (index) => {
    const updatedList = listsItems.filter((items, id) => {
      return index !== id;
    })
    props.setLists(updatedList);
  }

  // const listsItems = props.value;


  return (
    <>
    <br/><br/>
    <Card>
      {listsItems!=[] && listsItems.map((items, index) =>
   (
    <Card key={index}>
      <br/>
      <ul>
        <Card style={{width: '80%', margin: 'auto', paddingLeft: '0', color:'white', backgroundColor: 'red' }}>
         <li>
          <Card.Body>
            <Card.Title><TableList value={items}/>
              <br/><br/>
            <Button variant="warning" onClick={() => removeItem(index)}>Remove</Button>
              
            </Card.Title>
          </Card.Body>
         </li>
        </Card>
      </ul>
    </Card>
  )
  )
      }
    </Card>
  </>
  )
}

