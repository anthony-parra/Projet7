import React, { Component, Fragment } from 'react'
import '../Article/article.css'
import PartageArticle from './partageArticle'

class RecuperationArticles extends Component {

    state = {
        error: null,
        isLoaded: false,
        homes: [],
    }

    fetchGetArticle = () => {
        fetch('http://localhost:3000/api/article/allArticle')
          .then(res => res.json())
          .then((result) => {
              this.setState({
                isLoaded: true,
                homes: result
              });
            })
            .catch((error)=> { this.setState({
                isLoaded: true,
                error
            });
            })
    }

    componentDidMount(){
        this.fetchGetArticle()
    }

    handleClickCommentaire = (event) => {
        const post_id = event.currentTarget.value
        const homes = this.state.homes
        homes.map(home => {
            let homeArray = Object.values(home)
            let postIds = homeArray[2]
            if(postIds == post_id){
                console.log('bravo tu as l\'id de l\'article !')
            } else {
                console.log('Ce n\'est pas le bon')
            }
        })
    }

    render(){

        const { error, isLoaded, homes } = this.state

        if (error) {
            return (
              <div>Error: { error.message }</div>
            );
          } else if (!isLoaded) {
              return (
              <div>Loading...</div>
              );
          } else {

            return(

                <Fragment>
                    <div> 
                    { 
                        homes.map(home =>
                            <div id={home.post_id} className='bloc_color' key={home.post_id} >
                                <div className='newArticle'>

                                    <p id= "titreNewArticle">{home.titre}</p>
                                    <p id='blocArticle'>{home.article}</p>

                                    <form>

                                        <label htmlFor='commentaires' name='commentaires'/>
                                        <input onChange= { this.handleChangeCommentaire } className='commentaires' name='commentaires' type='text' placeholder='Écrivez quelque chose !' required ></input>
                                        
                                        <input type='submit' className='boutonCommentaires' value='Poster commentaire'></input>
                                        
                                    </form>
                                    <div>
                                        <button value={home.post_id} onClick = { this.handleClickCommentaire } className='nombresCommentaires'>Commentaires</button>
                                        <PartageArticle />
                                        <button onClick = { this.handleClickArticle } id={home.id} className='boutonRedirection'>Allez sur l'article !</button>          
                                    </div>
                                </div>
                            </div>   
                        )   
                    }   
                    </div>
                </Fragment>
            )
          }
    }
}

export default RecuperationArticles