import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


import LogoCT from '../../assets/logoct.png'
import LogoTR from '../../assets/logotr.png'

export default function Welcome(){
    return(
    <div className = 'welcome-container'>
        <section className = 'page-title'>
         <img className= 'ctCoin' size = {16} src={LogoCT} alt="Logo CT"/>
         <h1>Welcome</h1>
         <img className = 'trCoin' src={LogoTR} size = {16} alt="Logo TR"/>
        </section>
        <section className = 'welcome-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing</p>
        </section>
        <Link to="/OnGame" className = 'welcome-button'>
        <span>Continue</span>
        </Link>

        

    </div>
     
    );
}