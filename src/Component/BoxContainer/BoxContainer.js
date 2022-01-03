import React, {Component} from 'react';
import Box from '../Box/Box';
import './BoxContainer.css';

class BoxContainer extends Component{
    render(){
        return(
            <div className='BoxContainer'>
            { Array.from({length:20}).map(n=><Box />)}
            </div>
        )
    }
}

export default BoxContainer;