import React, { Component, Fragment } from 'react'
import './connexion-inscription.css'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

    state = {
        accueil : false
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ accueil : true })
    }

    render(){

        if(this.state.accueil){
            return <Redirect push to = '/accueil'></Redirect>
        }

        return(

                <Fragment>

                    <div className='bloc_connexion'>
                                <h2>Connexion</h2>

                                    <form id = 'connexion' onClick = { this.handleSubmit }>

                                        <label htmlFor='email'>Votre adresse mail </label>
                                        <input type='email' name='email' id='email' required placeholder='prénom.nom@groupomania.com'></input>

                                        <label htmlFor='password'>Votre mot de passe</label>
                                        <input type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                                        <input id='connexion_validation' type='submit' value='Connexion'></input>

                                    </form>         
                    </div>
                    
                </Fragment>
        )
    }

    
}

export default Connexion