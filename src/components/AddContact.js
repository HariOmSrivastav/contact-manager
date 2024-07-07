import React , {useState} from 'react'
import styled from 'styled-components';
const Input = styled.input`
width : 95%;
margin-top : 7px;
margin-bottom : 7px;
font-size :15px ;
border-radius : 5px;
`
const H = styled.div`
  position : relative;
  left : 80px;
  font-weight : 400;
  font-size : 29px ;
`
const AC1 = styled.div`
  margin-top : 5px;
  font-weight : 150px;
  font-size : 18px;
  width : 95%;
  background : grey;
  border-radius : 10px;
  padding-left : 4px;
  padding-right : 4px;
  padding-bottom : 4px;
  display : flex;
  flex-direction : column;

  
`

function AddContact({addContact}) {
  const [contactData , setcontactData] = useState({name : '' ,email: ''});
  const handleChange = (e) =>{
    if(e.target.name === "name"){
      setcontactData({...contactData, name: e.target.value});
    }
    else if(e.target.name === "email"){
      setcontactData({...contactData , email : e.target.value});
    }
    else{
      setcontactData({...contactData , number : e.target.value});
    }
  }
  const handleAdd = (e) => {
    if(contactData.name === '' || contactData.email === ''){
      alert("Please fill all the details");
      return;
    }
    addContact(contactData);
    setcontactData({name : "" , email : "" , number : ""})
  }
  return (
        <AC1>
          <H>Add Contact</H>
        <form className="AC2">
            <div className="field">
                <label htmlFor="n">Name</label>
                <br></br>
                <Input id='n' type="text" name='name' value={contactData.name}
                placeholder='Name' onChange={handleChange}/>
                <br></br>
                <label htmlFor="e">Email</label>
                <br></br>
                <Input id='e' type="text" name='email' value={contactData.email}
                placeholder='Email' onChange={handleChange}/>
                <br></br>
                <label htmlFor ="p">Contact Number</label>
                <br></br>
                <Input id='p' type="number" name='num' value={contactData.number}
                placeholder='Contact Number' onChange={handleChange}/>
                <br></br>
                <br></br>
            </div>
        </form>

        <button className='btn' onClick={handleAdd}>Add Contact</button>
        </AC1>
  )
}

export default AddContact

