import React from 'react';
import './Secret.css';
import { Input } from '../../components/Form/Form'

class Secret extends React.Component {
    render() {
        return(
            <>
                <div id="internals">
                    <Input
                    onChange={console.log("change")}
                    name="inputBox"
                    placeholder="what's 9+10"
                    id="inputBox"
                    // style={{marginTop:10, width:150, border_width:2, border_style:"solid"}}
                    />
                    <button>enter</button>
                </div>
            </>
        )
    }
}

export default Secret;