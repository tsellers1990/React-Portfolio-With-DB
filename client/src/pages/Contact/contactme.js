import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import { Input, FormBtn } from '../../components/Form/Form';
import './Contact.css'; // after I've got styling to add
// idk if I'll need more imports, should be fine but if I do add them here!

const Contact = () => {
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
    
    function handleFormSubmit(event) {
        event.preventDefault();
        if(formObject.full_name && formObject.email) {
            API.saveContactRequest({
                full_name: formObject.full_name,
                email: formObject.email,
                phone: formObject.phone,
                description: formObject.description,                
            })
            .catch(err => console.log(err));
        }
    };
  
    return (
      <div className="container">
        <form>
          <Input 
            onChange={handleInputChange}
            name="full_name"
            placeholder="Please input your First and Last name"
            style={{ marginTop: 10}}
          />
          <Input 
            onChange={handleInputChange}
            name="email"
            placeholder="Please input your email"
            style={{ marginTop: 10}}
          />
          <Input
            onChange={handleInputChange}
            name="phone"
            placeholder="Phone Number"
            style={{ marginTop: 10}}
          />
          <Input 
            onChange={handleInputChange}
            name="description"
            placeholder="Please give a brief description of what you'd like to speak with me about"
            style={{ marginTop: 10}}
          />
          <FormBtn //this is the submit button
            disable={!(formObject.title || formObject.description)}
            onClick={handleFormSubmit}
          >
          </FormBtn>
        </form>
      </div>
    );
}
export default Contact;