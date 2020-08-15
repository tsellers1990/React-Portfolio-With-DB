import React from 'react';
import './Secret.css';
import { Input } from '../../components/Form/Form'
import Tetris from '../../components/Tetris/Tetris'

class Secret extends React.Component {
    render() {
        return(
            <>
                <div className="wrapper">
                    <Tetris />
                </div>
            </>
        )
    }
}

export default Secret;