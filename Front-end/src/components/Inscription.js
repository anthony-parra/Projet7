import React, { Fragment } from 'react'

const Inscription = () => {
    return(
        <Fragment>
            <h2>Inscription</h2>

                <form className='inscription' method='post' action=''> 
                    <label htmlFor='email'>Votre adresse mail </label>
                    <input type='email' name='email' id='email' required size='100px' placeholder='prénom.nom@groupomania.com'></input>
                    <p>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</p>
                    <input className='inscription_validation' type='submit' value='Inscription'></input>
                    
                    <label htmlFor='password'>Votre mot de passe</label>
                    <input type='text' name='password' id='password' required size='50px'></input>

                </form>
        </Fragment>
    )
}

export default Inscription

