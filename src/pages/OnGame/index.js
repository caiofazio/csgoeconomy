import React, {useState} from 'react';

import './style.css'

import LogoCT from '../../assets/logoct.png'
import LogoTR from '../../assets/logotr.png'

export default function OnGame(){
let [ctScore, ctWin] = useState(0)
let [trScore, trWin] = useState(0)

function nextRound(){
    ctWin(ctScore + 1)
    trWin(trScore + 1)
}


    return(
    <div className = 'onGame-container'>
        <section className = 'page-score'>
            <div className = 'CT'>
                <img className= 'ctCoin' src={LogoCT} alt="Logo CT"/>
                <h2 className = 'ctScore'>{ctScore}</h2>
            </div>
            <div className = 'TR'>
                <h2 className = 'trScore'>{trScore}</h2>
                <img className = 'trCoin' src={LogoTR} alt="Logo TR"/>
            </div>
        </section>
    <div className = 'contentPage'>    
        <form className = 'onGame-form'>
            <div className = 'teams'>
            <input type="radio" name="imagem" id="i1" />
            <label for="i1"><img className = 'trTeam' src={LogoTR} alt="TrCoin"/></label>
            <input type="radio" name="imagem" id="i2" />
            <label for="i2"><img className = 'ctTeam' src={LogoCT} alt="CTCoin"/></label>
            </div>
        </form>
        <section className = 'teamData'>
            <h4 className = 'descriptions'> Dinheiro estimado: 10000$ </h4>
        </section>

    </div>   

    </div>
     
    );
}