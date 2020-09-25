import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import '../../../pagePublic.css'

class Connexion extends Component {

    state = {
        token: null,
        userId: null,
        redirection : false,
        dataForm: {
            email: '',
            password:''
        }
    }

    handleChangeEmail = (event) => {
        const dataForm = {...this.state.dataForm}
        const email = event.target.value
        dataForm.email = email
        this.setState({ dataForm })
        localStorage.setItem('email', email)
    }
    handleChangePassword = (event) => {
        const dataForm = {...this.state.dataForm}
        const password = event.target.value
        dataForm.password = password
        this.setState({ dataForm })
    }

    handleSubmit = (event) => {

        event.preventDefault()
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json');

        fetch('http://localhost:3000/api/auth/login', {
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
        .then(response => this.setState({ token: response.token, userId: response.userId }))
        .then(() => this.setState({ redirection: true }))
        .catch((error) => {
            console.log({ message : 'Il y a une erreur : '+ error})
            alert('Il semble avoir un problème avec votre authentification, veuillez réessayer s\'il vous plait...') 
        })          
    }

    render(){

        const { dataForm } = this.state
        const { redirection } = this.state
        localStorage.setItem('token', this.state.token)
        localStorage.setItem('userId', this.state.userId)

        if(redirection){
            return <Redirect to='/accueil' />
        }

        return(
                <Fragment>
                    <div className='bloc_connexion'>
                        <h2>Connexion</h2>

                            <form id = 'connexion' onSubmit = { this.handleSubmit }>

                                <label htmlFor='email'>Votre adresse mail </label>
                                <input value = {dataForm.email} onChange = {this.handleChangeEmail} type='email' name='email' id='email' required placeholder='prénom.nom@groupomania.com'
                                pattern='[a-z]{2,}.[a-z]{2,}@[g]{1}[r]{1}[o]{1}[u]{1}[p]{1}[o]{1}[m]{1}[a]{1}[n]{1}[i]{1}[a]{1}.[c]{1}[o]{1}[m]{1}'/>

                                <label htmlFor='password'>Votre mot de passe</label>
                                <input value = {dataForm.password} onChange = {this.handleChangePassword} type='password' name='password' id='password' required minLength='5' maxLength='15'></input>

                                <input  id='connexion_validation' type='submit' value='Connexion'></input>

                            </form>         
                    </div>    
                </Fragment>
        )
    } 
}
export default Connexion