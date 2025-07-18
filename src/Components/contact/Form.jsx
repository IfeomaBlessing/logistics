import React, {useState} from 'react'
import '../contact/cstyle.css'
import '../contact/Validate'

const Form = () => {
    const [values, setValues] = useState({
        name:"",
        phone:"",
        email:"",
        message:""
    })

    const handleInput =(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }
    const [error, setError] =useState({})
    const [isDataCorrect, setIsDataCorrect] =useState(false)
  const [success, setSuccess] =useState("")

    const handleSend =(e)=>{
        e.preventDefault();
        setError(Validation(values));
        setIsDataCorrect(true)
       
        if(Object.keys(error).length === 0 && isDataCorrect){
            setSuccess(`Hi ${values.name}, Your message has been sent successfully`);

            setValues({name:"",
            phone:"",
            email:"",
            message:""});

            setTimeout (()=>{
              setSuccess ("")
            },1000)
        }
    
        else{
            

              setSuccess(" ");
        }
    }

  return (
    <form >
      
    <div className='t-form' >
    <div>
    <input type='text' name='name'
    placeholder='Your Name' value={values.name}
    onChange={handleInput}/>
     {
        error.name && <p style={{color:"red", fontSize:"13px", marginBottom:"4px"}}>{error.name}</p> 
      }
      </div>

      <div>
      <input type='digit'placeholder='Phone Number'
      name='phone' value={values.phone}
      onChange={handleInput}/>
       {
        error.phone && <p style={{color:"red", fontSize:"13px", marginBottom:"4px"}}>{error.phone}</p> 
      }
    </div>
    </div>

    <div>
    <input type='email'placeholder='Email' 
    name='email'value={values.email}
    onChange={handleInput}/>
      {
        error.email && <p style={{color:"red", fontSize:"13px", marginBottom:"4px"}}>{error.email}</p> 
      }
     
    </div>
    
    <textarea  rows="8" placeholder="Send Your Message"
    name='message' value={values.message}
    onChange={handleInput}></textarea>
     {
        error.message && <p style={{color:"red", fontSize:"13px", marginBottom:"4px"}}>{error.message}</p> 
      }
          
          {
        success && <p style={{color:"green",fontSize:"13px", marginBottom:"4px"}}>{success}</p>
      } 
 
     <button className='button' onClick={handleSend}>SUBMIT</button>
    </form>
  )
}

export default Form