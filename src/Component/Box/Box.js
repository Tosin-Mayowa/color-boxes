import React, {Component} from 'react';
import {hexColor} from '../Box/helpers';
import './Box.css';
class Box extends Component{
   static defaultProps={
        hexa:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    }
constructor(props){
    super(props);
    this.state={
        color:'#56ee3a',
      
    };
    this.handleClick=this.handleClick.bind(this);
}

 pickColor(){
     let i=this.state.color.length-1;
     let newColor;
     
do {newColor= hexColor(this.props.hexa,i);}
     while(newColor===this.state.color)
    this.setState({color:newColor});
     
    
 }



handleClick(e){
    this.pickColor();
   
}
 render(){
     return (
<div className='Box' style={{backgroundColor: this.state.color }}  onClick={this.handleClick}>
<h1 className="Box-name">{this.state.color}</h1>
</div>

     )
 }



}

export default Box;