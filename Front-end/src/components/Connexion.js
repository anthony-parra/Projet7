import React, { Fragment } from 'react'

const Connexion = () => {
    return(
        <Fragment>
            <h2>Connexion</h2>

                <form className='connexion' method='post' action=''> 
                    <label htmlFor='email'>Votre adresse mail </label>
                    <input type='email' name='email' id='email' required size='100px' placeholder='prénom.nom@groupomania.com'></input>
                    <p>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</p>
                    <input className='connexion_validation' type='submit' value='Connexion'></input>
                    
                    <label htmlFor='password'>Votre mot de passe</label>
                    <input type='text' name='password' id='password' required size='50px'></input>

                </form>
        </Fragment>
    )
}

export default Connexion