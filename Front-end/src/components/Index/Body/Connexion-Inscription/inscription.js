import React, { Component, Fragment } from 'react'
import './connexion-inscription.css'

class Inscription extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const myForm = document.getElementById('inscriptionFormulaire')
        const inscriptionUser = new FormData(myForm)

            fetch({
                method: 'POST',
                url:'http://localhost:3000/api/auth',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify(inscriptionUser)
            })
                .then((respons, error) => {
                    console.log({ message : 'Première  :' + error})
                    return respons.json() 
                })
                .then((jsonData, error) => {
                    console.log({ message : 'Deuxième + :' + error})
                    return JSON.stringify(jsonData);
                })
                .catch((error) => {
                    console.log({ message : 'Troisième :' + error })
                })
    }
        
    render(){

    
        return(

            <Fragment>
                <div className='bloc_inscription'>
                    <h2>Inscription</h2>

                        <form id='inscriptionFormulaire' onSubmit = {this.handleSubmit} > 
                        
                            <label htmlFor='email'>Votre adresse mail </label>
                            <input type='email' name='email' id='email' required placeholder='prénom.nom@groupomania.com'></input>
                            <p><strong>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</strong></p>
                            
                            <label htmlFor='password'>Votre mot de passe</label>
                            <input type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                            <input id='inscription_validation' type='submit' value='Inscription'></input>

                        </form>        
                </div>                  
            </Fragment>
        )
    }
}

export default Inscription