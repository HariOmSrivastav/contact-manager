import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';
const Di = styled.div`
  font-weight : 500;
  font-size : 25px;
`;
const V = styled.div`
display : flex;
flex-direction : column;
`;
const W = styled.div`
width : 330px;
border : 2px solid white;
display : flex;
flex-direction : row;
margin-bottom : 3px;
justify-content : space-between;
background : grey;
& span{
  height: inherit;
  display: flex;
  align-items: center;
  padding: 10px;
  color: rgba(255, 0, 0, 0.6);
}
`;

function ContactList(props) {
  const {contact , removeContact} = props
  const contactList = contact.map((val) => {
    return (
      <div key={val.id}>
        <W>
          <V>
            <div>Name  : {val.data.name}</div>
            <div>Email : {val.data.email}</div>
            <div>Contact Number : {val.data.number}</div>
          </V>
          <span onClick={() => removeContact(val.id)}><DeleteIcon/></span>
        </W>
      </div>
    )
  })

  return( 
    <>
      {()=> (console.log('first'))}
      <Di>Contact List</Di>
      <div>{contactList}</div>
    </>
  )
}

export default ContactList
