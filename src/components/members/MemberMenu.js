import React, { Component } from 'react';
import People from './People'

class MemberMenu extends Component {
	constructor(props){
      super(props);
      this.state={
      	name: "Scott",
      	showPopup:true,
      };
     }

 	togglePopup() {
	    this.setState({
	    	showPopup: !this.state.showPopup,
	    });
	}
    render() {
        return (
        	<div className="mem">
	            <div className="people_popup">
	            	{this.state.showPopup ?
	                	<People className="people"  name={this.state.name}
	                	closePopup={this.togglePopup.bind(this)} />
	                	: null
			        }
		        </div>
			    <div className="people_left">
	                <h1 className="position">Professor</h1>
	                <div className="membersdiv">
	                	<span className="members"
			                onClick={function(){
								this.setState({
									showPopup:true,
									name:"Scott"
								})
							}.bind(this)}
>Scott<br/>
							<img className="popoutme" src={require('./photo/Scott.jpg')} alt='No photo'/>
						</span>
					</div>
					<h1 className="position">PhD</h1>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Isma Farah"
								})

							}.bind(this)}
>Isma Farah<br/>
							<img className="popoutme" src={require('./photo/Isma Farah.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Abdul Rahim"
								})

							}.bind(this)}
>Abdul Rahim<br/>
							<img className="popoutme" src={require('./photo/Abdul Rahim.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Asad Abbas"
								})

							}.bind(this)}
>Asad Abbas<br/>
							<img className="popoutme" src={require('./photo/Asad Abbas.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Gichan Lee"
								})

							}.bind(this)}
>Gichan Lee<br/>
							<img className="popoutme" src={require('./photo/Gichan Lee.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Mohsin Javaid"
								})

							}.bind(this)}
>Mohsin Javaid<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Muhammad Umair Khan"
								})

							}.bind(this)}
>Muhammad Umair Khan<br/>
							<img className="popoutme" src={require('./photo/Muhammad Umair Khan.jpg')} alt='No photo'/>
						</span>
					</div>


					<h1 className="position">M.E.</h1>


					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Gayeon Kim"
								})

							}.bind(this)}
>Gayeon Kim<br/>
							<img className="popoutme" src={require('./photo/Gayeon Kim.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Seonwoong Kim"
								})

							}.bind(this)}
>Seonwoong Kim<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Wu Zhiqiang"
								})

							}.bind(this)}
>Wu Zhiqiang<br/>
							<img className="popoutme" src={require('./photo/Wu Zhiqiang.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Gwanggyu Choi"
								})

							}.bind(this)}
>Gwanggyu Choi<br/>
							<img className="popoutme" src={require('./photo/Gwanggyu Choi.gif')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Hyunglak Kim"
								})

							}.bind(this)}
>Hyunglak Kim<br/>
							<img className="popoutme" src={require('./photo/Hyunglak Kim.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Youn Guen Ahn"
								})

							}.bind(this)}
>Youn Guen Ahn<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Kyojune Hwang"
								})

							}.bind(this)}
>Kyojune Hwang<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Hakjin Lee"
								})

							}.bind(this)}
>Hakjin Lee<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>

					<h1 className="position">Intern</h1>

					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Dahae Sung"
								})

							}.bind(this)}
>Dahae Sung<br/>
							<img className="popoutme" src={require('./photo/Dahae Sung.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Yongtaek Oh"
								})

							}.bind(this)}
>Yongtaek Oh<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Namju Park"
								})

							}.bind(this)}
>Namju Park<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>

					<h1 className="position">Alumni</h1>

					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Jaejin Kim"
								})

							}.bind(this)}
>Jaejin Kim<br/>
							<img className="popoutme" src={require('./photo/no.png')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Jiang Hua"
								})

							}.bind(this)}
>Jiang Hua<br/>
							<img className="popoutme" src={require('./photo/Jiang Hua.jpg')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Jaeho Choi"
								})

							}.bind(this)}
>Jaeho Choi<br/>
							<img className="popoutme" src={require('./photo/Jaeho Choi.JPG')} alt='No photo'/>
						</span>
					</div>
					<div className="membersdiv">
						<span className="members"
							onClick={function(){
								this.setState({
									showPopup:true,
									name:"Geunhwan Park"
								})

							}.bind(this)}
>Geunhwan Park<br/>
							<img className="popoutme" src={require('./photo/Geunhwan Park.jpg')} alt='No photo'/>
						</span>
					</div>

	            </div>
            </div>
        )
    }
}
export default MemberMenu;
