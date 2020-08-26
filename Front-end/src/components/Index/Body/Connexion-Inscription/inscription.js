import React, { Component, Fragment } from 'react'
import './connexion-inscription.css'

class Inscription extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData( event.target )
        
        function envoieDonnees (url) {

            fetch( url , {
                method: 'POST',
                body: data
            })
            .then((response, error) => {
                if(error){
                    console.log('Il y a une erreur de type :' + error)
                } 
                return response.json()
            })
            .then((jsonData, error) => {
                if(error){
                    console.log('Il y a une erreur de type :' + error)
                }
                return JSON.stringify(jsonData);
            })
            .catch((error) => {
                console.log({ message : 'Erreur :' + error })
            })
        }
        envoieDonnees('http://localhost:3000/api/auth/signup')
    }
        
    render(){
    
        return(

            <Fragment>
                <div className='bloc_inscription'> 
                    <h2>Inscription</h2>

                        <form id='inscriptionFormulaire' onSubmit = { this.handleSubmit }> 
                        
                            <label htmlFor='email'>Votre adresse mail </label>
                            <input type='email' name='email' id='email' required placeholder='prénom.nom@groupomania.com'></input>
                            <p><strong>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</strong></p>

                            <label htmlFor='nom'>Nom</label>
                            <input type='text' name='nom' id='nom' required minLength='2' maxLength='20' ></input>

                            <label htmlFor='prenom'>Prénom</label>
                            <input type='text' name='prenom' id='prenom' required minLength='2' maxLength='20' ></input>
                            
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