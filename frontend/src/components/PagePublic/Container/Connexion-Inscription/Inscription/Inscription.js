import React, { Fragment, Component } from 'react'
import '../../../pagePublic.css'
import { Redirect } from 'react-router-dom';

class Inscription extends Component {
    constructor(props) {
        super(props);

        this.state = {

            inscription: false,
            dataForm : {
                email: '',
                nom: '',
                prenom: '',
                password: ''
            }
        }
      }

    handleChangeEmail = (event) => {
    const dataForm = { ...this.state.dataForm }
    const email = event.target.value
    dataForm.email = email
    this.setState({ dataForm })
    }
    handleChangeNom= (event) => {
    const dataForm = { ...this.state.dataForm }
    const nom = event.target.value
    dataForm.nom = nom
    this.setState({ dataForm })
    }
    handleChangePrenom= (event) => {
    const dataForm = { ...this.state.dataForm }
    const prenom = event.target.value
    dataForm.prenom = prenom
    this.setState({ dataForm })
    }
    handleChangePassword= (event) => {
    const dataForm = { ...this.state.dataForm }
    const password = event.target.value
    dataForm.password = password
    this.setState({ dataForm })
    }

    handleSubmit = (event) => {

    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(this.state.dataForm)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(response => console.log(response))
    .then(() => this.setState({ inscription: true }))
    .catch((error) => {
        console.log({ message : 'Il y a une erreur : '+ error})
        alert('Une erreur s\'est produite, veuillez vérifier vos informations d\'inscription.') 
    })
    alert('Merci de votre inscription, vous allez redirigé afin de vous connecter !')
}  
    render(){
        const { dataForm } = this.state
        const { inscription } = this.state

        if(inscription){
            return <Redirect to='/connexion' />
        }

        return(

            <Fragment>
                <div className='bloc_inscription'> 
                    <h2>Inscription</h2>

                        <form id='inscriptionFormulaire'onSubmit = {this.handleSubmit} > 
                        
                            <label htmlFor='email'>Votre adresse mail </label>
                            <input value= { dataForm.email } onChange={this.handleChangeEmail} type='email' name='email' id='email' required placeholder='prénom.nom@groupomania.com'
                            pattern='[a-z]{2,}.[a-z]{2,}@[g]{1}[r]{1}[o]{1}[u]{1}[p]{1}[o]{1}[m]{1}[a]{1}[n]{1}[i]{1}[a]{1}.[c]{1}[o]{1}[m]{1}'/>
                            <p><strong>Veuillez entrer l'adresse mail utilisé dans le cadre de vos fonctions.</strong></p>

                            <label htmlFor='nom'>Nom</label>
                            <input value= { dataForm.nom } onChange={this.handleChangeNom} type='text' name='nom' id='nom' required minLength='2' maxLength='20' ></input>

                            <label htmlFor='prenom'>Prénom</label>
                            <input value= { dataForm.prenom } onChange={this.handleChangePrenom} type='text' name='prenom' id='prenom' required minLength='2' maxLength='20' ></input>
                            
                            <label htmlFor='password'>Votre mot de passe</label>
                            <input value= { dataForm.password } onChange={this.handleChangePassword} type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                            <input id='inscription_validation' type='submit' value='Inscription'></input>

                        </form>        
                </div>                  
            </Fragment>
        )
    }
}

export default Inscription