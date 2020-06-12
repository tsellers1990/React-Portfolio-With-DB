import React from "react";



const Form = (props) => {

    function submitClick(event) {
        event.preventDefault();
        alert("This isnt functional YET, I'm currently working on it (6/12/2020 @ 5pm). If you need to contact me, PLEASE email me at tsellers1990@gmail.com")
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                                <input 
                                id="description" 
                                type="email" 
                                className="validate" 
                                placeholder="Please give a brief description of what you'd like to speak with me about"
                                />
                            </div>
                        </div>
                    <button onClick={submitClick} class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default Form;