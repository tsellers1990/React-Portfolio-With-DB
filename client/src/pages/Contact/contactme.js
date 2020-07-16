import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import { Input, FormBtn } from '../../components/Form/Form';
import history from '../../utils/history'
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
            .then(() => history.goBack())
            .catch(err => console.log(err));
        }

    };
  
    return (
      <div className="container">
        <form>
          <Input 
            onChange={handleInputChange}
            name="full_name"
            placeholder="Name"
            style={{ marginTop: 10}}
          />
          <Input 
            onChange={handleInputChange}
            name="email"
            placeholder="Email"
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
            placeholder="Brief Description"
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