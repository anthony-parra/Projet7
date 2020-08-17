import React, { Fragment } from 'react'

const Connexion = () => {

    return(
        <Fragment>
            <div className='bloc_connexion'>
                        <h2>Connexion</h2>

                            <form className='connexion' method='POST' action='accueil.html'>

                                <label htmlFor='email'>Votre adresse mail </label>
                                <input type='email' name='email' id='email' required size='100px' placeholder='prénom.nom@groupomania.com'></input>

                                <label htmlFor='password'>Votre mot de passe</label>
                                <input type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                                <input className='connexion_validation' type='submit' value='Connexion'></input>

                            </form>

                            
            </div>
        </Fragment>
    )
}

export default Connexion