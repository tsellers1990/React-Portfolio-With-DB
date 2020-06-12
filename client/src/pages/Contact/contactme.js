import React from 'react';
import Form from '../../components/Form/Form'
// import './Contact.css' after I've got styling to add
// idk if I'll need more imports, should be fine but if I do add them here!

class Contact extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>This is the future home of the Contact page!</h1>
                <p>If you're interested in contacting me, please reach out to tsellers1990@gmail.com. I'm saving this for last because it's my favorite part!</p>
                <p></p> */}
                <Form />
            </div>
        )
    }
}
export default Contact;