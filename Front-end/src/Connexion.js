import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

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
            return <Redirect to = {`/accueil/${this.state.email}`}></Redirect>
        }

        return(

                <Fragment>

                    <div className='bloc_connexion'>
                                <h2>Connexion</h2>

                                    <form className = 'connexion' onSubmit = {this.handleSubmit} >

                                        <label htmlFor='email'>Votre adresse mail </label>
                                        <input value={this.state.email}
                                            onChange={this.handleChange} 
                                            type='email' name='email' id='email' required  
                                            placeholder='prénom.nom@groupomania.com'></input>

                                        <label htmlFor='password'>Votre mot de passe</label>
                                        <input type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                                        <input className='connexion_validation' type='submit' value='Connexion'></input>

                                    </form>

                                    
                    </div>
                    
                </Fragment>
        )
    }

    
}

export default Connexion