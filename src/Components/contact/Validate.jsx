
const Validate = (values) => {
  let error = {};
  const email_pattern =/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
  const text_pattern = /^[0-9]*$/
 const message_pattern = /^[\w\s.,?!'\n\r-]+$/;

  

  if(!values.name){
      error.name ="Name is required"
  } else if (values.name.length < 4) {
      error.name ="Name cannot be less than 4"
  }
  else if(text_pattern.test(values.name)){
      error.name ="Only alphabets are allowed"
  } 
 


   if(!values.phone){
      error.phone ="Phone number is required"
  }else if(!text_pattern.test(values.phone)){
    error.phone = "Enter a valid phone number with country code";
  }
  

   if(!values.email){
      error.email ="Email is required"
  }else if(!email_pattern.test(values.email)){
      error.email ="Invalid Email"
  }
  

  if(!values.message){
      error.message ="Enter your message"
  }else if(!message_pattern.test(values.message)){
      error.message ="This is an invalid message"
  } 
  else {
    const wordCount = values.message.trim().split(/\s+/).length;
    if (wordCount < 15) {
      error.message = "Message must be at least 15 words";
    }
  }
 
return error;
}

export default Validate;