import React, { Fragment, Component } from 'react'
import { Redirect } from 'react-router-dom'
import Image from '../../../images/image_logo.svg'
import './headers.css'


class HeadersPrivate extends Component{

    state = {
        redirection: false,
        token: localStorage.getItem('token')
    }

    handleDelete = () => {

        const confirm = window.confirm('Êtes vous sur de vouloir supprimer votre compte Groupomania ?')
            if(confirm === true){

                const token = localStorage.getItem('token')
                console.log(token)
                const userId = localStorage.getItem('userId')
                const myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json','Authorization',`token: Bearer ${token}`);

                fetch(`http://localhost:3000/api/auth/${userId}`, {
                        method: 'DELETE',
                        headers: myHeaders,
                    })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        return Promise.reject(response.status);
                    }
                })
                .then((response) => console.log(response))
                .then(() => this.setState({ redirection: true }))
                .catch((error) => {
                    console.log({ message : 'Il y a une erreur : '+ error})
                    alert('Il semble avoir un problème avec votre authentification, veuillez réessayer s\'il vous plait...') 
                })
                localStorage.removeItem('token')
            }
    }

    handleClick = () => {
        const confirm = window.confirm('Êtes vous sûr de vouloir vous déconnecter ?')
            if(confirm === true){
                this.setState({ token: null })
                localStorage.removeItem('token')
            }
    }

    render(){

        const { redirection } = this.state
        const email = localStorage.getItem('email')
        const { token } = this.state

            if(token === null){
                return <Redirect to='/' /> 
            }
        
            if(redirection){
                return <Redirect to='/' />
            }

        return(
        <Fragment>
            <header id='headersPrivate'>
                <h1><img className='logo_groupomania' src={Image} alt='Logo de Groupomania'/></h1>
                <div id='blocDisconnectDelete'>
                    <button id='disconnect' onClick={ this.handleClick } >Se déconnecter</button>
                    <div className='bloc_mail_delete'>
                        <p>{email}</p><button onClick={ this.handleDelete } id='delete' >Supprimer son compte</button>
                    </div>
                </div>
            </header>
        </Fragment>
        )
    }   
}

export default HeadersPrivate