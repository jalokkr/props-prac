import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


import TaskList from './TaskLIst'

export default function Formi() {
  const [listsa, setListsa] = useState('');
  const [lists, setLists] = useState([]);


  const handleChange=(e)=>{
    e.preventDefault();
    setListsa(e.target.value)
    
  }
  const handleAdd=(event)=>{
    event.preventDefault();
    if(listsa.trim() == ''){
       alert('please enter anything in input box')
    }else{
      // const newList = lists.push({listsa});
    setLists([...lists,listsa])
    // setLists(listsa);
    setListsa('');
    console.log(lists)
    }
    
  }
  return (
    <div style={{backgroundColor: 'blueviolet', width: '80%', margin: 'auto', color: 'white'}}>
     <Form style={{padding: '10%'}}>
        <h3>Add in List</h3>
        
      <Form.Control type="text" value={listsa} onChange={handleChange}/>
      <br/>
        <Button variant="success" onClick={handleAdd}>Add</Button>
        <TaskList setLists={setLists} value={lists}/>
     </Form>
    </div>
    
  )
}
