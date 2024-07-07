import React, { useEffect, useState } from 'react';
import './App.css';
import Header1 from './Header1';
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import uuid4 from 'uuid4';
import styled from 'styled-components';
const X = styled.div`
  background : #b3b3b3;
  width: 350px;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin : auto; 
  height : 100vh;
  `
function App() {
  
  const localStorageKey = "contact";
  const [contact, setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
    || []
  });
  useEffect(() =>{
    localStorage.setItem(localStorageKey , JSON.stringify(contact))
  },[contact])
  const addContact = (data) =>{
    setContact([...contact,{id : uuid4() , data}]);
  }
  const removeContact = (id) =>{
    const updatedList = contact.filter((val) => {
      return val.id !== id;
    })
    setContact(updatedList)
  }
  return (
    <div>
      
      <X>
        <Header1/>
        <AddContact addContact ={addContact}/>
        <ContactList contact = {contact} removeContact = {removeContact}/>
      </X>
      
    </div>
    

  );
}

export default App;
