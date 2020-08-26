import React, { Component, Fragment } from 'react'
import './connexion-inscription.css'

class Inscription extends Component {

    state = {
        email : '',
        accueil : false
    }

    handleChange = event => {
        const email = event.target.value
        this.setState({ email })
    }

    /*handleSubmit = event => {
        event.preventDefault()
        this.setState({ accueil : true })
    }*/

    handleSubmit = () => {
        async function envoieDonnee(url, inscription) {
  
        fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(inscription)
    
            }).then(function(response) {
                return response.json({ message : 'Vous avez bien été inscrit !'});
            })
            .catch(function(error) {
                console.error("Erreur dans votre inscription", error);
            });
    }
      const inscription = document.getElementById('choix_inscription');
      const inscriptionValidation = document.getElementById('inscription_validation');
      inscriptionValidation.addEventListener('click', () => {
  
        inscription.addEventListener('submit', (event) => {
            event.preventDefault()
            envoieDonnee('http://localhost:3000/app/routes/allRoutes');
        })
      })
    }

    render(){

        /*if(this.state.accueil){
            return <Redirect push to = {`/accueil/`}></Redirect>
        }*/

        return(

            <Fragment>
                <div className='bloc_inscription'>
                                    <h2>Inscription</h2>

                                        <form id='inscription'> 
                                        
                                            <label htmlFor='email'>Votre adresse mail </label>
                                            <input value={this.state.email}
                                                onChange={this.handleChange} 
                                                type='email' name='email' id='email' required size='100px' 
                                                placeholder='prénom.nom@groupomania.com'></input>
                                            <p><strong>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</strong></p>
                                            
                                            <label htmlFor='password'>Votre mot de passe</label>
                                            <input type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                                            <input onSubmit={ this.handleSubmit } id='inscription_validation' type='submit' value='Inscription'></input>

                                        </form>
                            
                </div>                  
            </Fragment>
        )
    }
}

export default Inscription