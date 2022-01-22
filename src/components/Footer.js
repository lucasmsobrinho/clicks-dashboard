import React from 'react';
import {FaGithub, FaLinkedin, FaCode} from 'react-icons/fa';
import './Footer.css';

const medias = [
    {
        name: "github",
        icon: <FaGithub/>,
        url: "https://www.github.com/lucasmsobrinho",
    }, {
        name: "linkedin",
        icon: <FaLinkedin/>,
        url: "https://www.linkedin.com/in/lucasmsobrinho/",
    }, {
        name: "portfolio",
        icon: <FaCode/>,
        url: "https://www.lucassobrinho.com/",
    }
]

const Footer = () => {
    return(
        <section id="footer">
            <MediaButtonContainer items={medias}/>
            <span className="copyright">@lucasmsobrinho<br/>2022</span>
        </section>
)}

const MediaButtonContainer = (props) => {
    const mediaList = props.items.map(media => 
            <MediaButton item={media} key={media.name}/>
    );
    return (
        <div className="media-button-container">
            {mediaList}
        </div>
    )
}

const MediaButton = (props) => {
    const {url, name, icon, modifier } = props.item
    return (
        <a href={url} title={name}>
            <div className="media-button" id={name} key={name} >
                {icon}
                {modifier?<div className="footer-circle"></div>:''}
            </div>
        </a>
    )
}


export default Footer