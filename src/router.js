import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Welcome from './pages/Welcome'
import OnGame from './pages/OnGame'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {Welcome}/>    
            <Route path="/onGame" component = {OnGame}/>
        
        </Switch>   
        </BrowserRouter>
    )
}