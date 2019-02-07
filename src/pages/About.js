import React, { Component } from "react";

export default class About extends Component {
    render(){
    return (
        <div className="component">
        {/* Info about 'About' page wih links to external sites about me, Linkedin etc... */}
            <div className="about">I made this app to continue my work on React and to keep my skills honed while I look for a job in the field. </div>
            <img className="waterski" src="../Waterski.jpg" alt="Waterski"></img><br/>
            
            {/* Buttons with animations and links to other sites */}
            <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/davecalderwood" 
            className="action-button shadow animate blue">
            GitHub</a>

            <a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/david-calderwood/" 
            className="action-button shadow animate red">
            Linkedin</a>

            <a 
            href="mailto:davidhcalderwood@gmail.com" 
            className="action-button shadow animate green">
            Email</a>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/david.calderwood35" 
            className="action-button shadow animate yellow">
            Facebook</a>

        </div>
    )
    }
}