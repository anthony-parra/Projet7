import React, {Component, Fragment} from 'react'
import Headers from './components/Index/Headers/headers.js'
import Body from './components/Index/Body/body'


class App extends Component {

  

  render(){

    /*async function envoieDonnee(url, order) {

      fetch(url, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(order)
  
          }).then(function(response) {
              return response.json();
          })
          .then(function(myJsonObj) {
              alert('Vous avez bien été inscrit !')
          })
          .catch(function(error) {
              console.error("Erreur dans votre inscription", error);
          });
  }
    const inscription = document.getElementById('choix_inscription');
    const inscriptionValidation = document.getElementById('inscription_validation');
    inscriptionValidation.addEventListener('click', () => {

      inscription.addEventListener('submit', (event) => {
          event.preventDefault();
      })

    });*/


    return(
      
      <Fragment>
          <Headers />
          <Body />   
      </Fragment>
    )
  }
}
export default App

    