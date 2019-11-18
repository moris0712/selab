import React from 'react';
import Menu from './Menu';
import './easter.css'; 
import Popup from "reactjs-popup";

const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
);


export default class Egg extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menu : false,
      weather : false,
      
    }
  }

  render(){
  return (
    <div className="MyModal">
      <div className="content">
        <div> <div>점심 뭐먹을까??</div><button className="button" onClick={()=>this.setState({menu : !this.state.menu})} > 클릭</button></div>
        {
          this.state.menu && <Menu/>
        }
        <div>
          <button className="closebtn" onClick={this.props.onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
  }
}