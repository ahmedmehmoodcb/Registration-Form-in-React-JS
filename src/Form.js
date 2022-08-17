import React, { useEffect, useState } from 'react'

const Form = () => {
    const data={name:"", email:"", password:""};
    const [inputData, setInputData]= useState(data);
    const [flag, setFlag] = useState (false)
    useEffect(()=> {
        console.log("Registered")
    })
    function handleData (e){
        setInputData({...inputData, [e.target.name]:e.target.value});
        console.log(inputData);
    }
    function handleSubmit(e) {
        e.preventDefault();
         if(!inputData.name || !inputData.email || !inputData.password) {
            alert ("All field are Mandatory")
         }
         else{
            setFlag(true)
         }
    }
  return (
    <div>
        <pre>{(flag)? <h2 className='ui-define'>hello {inputData.name}, you've Registered Successfull</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div><input type="text" placeholder='enter your name' name='name' value={inputData.name} onChange={handleData}></input></div>
        <div><input type='text' placeholder='enter your email' name='email' value={inputData.email} onChange={handleData}></input></div>
        <div><input type='text' placeholder='enter your password' name='password' value={inputData.password} onChange={handleData}></input></div>
        <div><button type='submit'>Submit</button></div>
    </form>
    </div>
  )
}

export default Form