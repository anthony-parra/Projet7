import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import '../Connexion-Inscription/connexion-inscription.css'

class Inscription extends Component {

    state = {
        email : '',
        accueil : false
    }

    handleChange = event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ accueil : true })
    }

    render(){

        if(this.state.accueil){
            return <Redirect push to = {`/accueil/`}></Redirect>
        }

        return(

            <Fragment>
                <div className='bloc_inscription'>
                                    <h2>Inscription</h2>

                                        <form className='inscription' onSubmit={ this.handleSubmit }> 
                                        
                                            <label htmlFor='email'>Votre adresse mail </label>
                                            <input value={this.state.email}
                                                onChange={this.handleChange} 
                                                type='email' name='email' id='email' required size='100px' 
                                                placeholder='prénom.nom@groupomania.com'></input>
                                            <p><strong>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</strong></p>
                                            
                                            <label htmlFor='password'>Votre mot de passe</label>
                                            <input type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                                            <input className='inscription_validation' type='submit' value='Inscription'></input>

                                        </form>
                            
                </div>                  
            </Fragment>
        )
    }
}

export default Inscription