import React from 'react';
import {FaGithub, FaLinkedin, FaCoffee} from 'react-icons/fa';
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
        icon: <FaCoffee/>,
        url: "https://www.lucassobrinho.com/",
    }
]

const Footer = () => {
    return(
        <section id="footer">
            <MediaButtonContainer items={medias}/>
            <div className="copyright">@lucasmsobrinho</div>
        </section>
)}

const MediaButtonContainer = (props) => {
    const mediaList = props.items.map(media => 
            <MediaButton item={media}/>
    );
    return (
        <div className="media-button-container">
            {mediaList}
        </div>
    )
}

const MediaButton = (props) => {
    const {url, name, icon } = props.item
    return (
        <a href={url} title={name}>
            <div className="media-button" id={name} key={name}>
                {icon}
            </div>
        </a>
    )
}


export default Footer