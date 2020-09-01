import React, { Component, Fragment } from 'react'
import '../Article/article.css'

class Article extends Component {
    constructor(){
        super();
        this.state = {
            error: null,
            isLoaded: false,
            homes: []
        };
    }
    
    fetchGetArticle =() => {
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

    componentDidMount() {
        this.fetchGetArticle()
        
        
    }
      render() {

        const { error, isLoaded, homes } = this.state;
    
        if (error) {
          return (
            <div>Error: { error.message }</div>
          );
        } else if (!isLoaded) {
            return (
            <div>Loading...</div>
            );
        } else {
            return (

                <Fragment>
                    <form id='formulaireArticle'>

                        <label htmlFor='titreArticle' name='titre'>Titre de l'article</label>
                        <input id='titreArticle' type='text' minLength='5' maxLength='20' name='titreArticle' required></input>

                        <label htmlFor='article'>Article</label>
                        <textarea type='text' id='article'  minLength='5'  name='article' rows='10' cols='60' required ></textarea>

                        <input onClick = { this.handleClick } id='boutonArticle' type='submit' value='Poster'></input>

                    </form>
                    <div>{homes.map(home => 
                        <div id='newArticle' key={home.id}>

                            <p>{home.titre}</p>
                            <p id='blocArticle'>{home.article}</p>

                            <input className='commentaires' name='commentaires' type='text' placeholder='Écrivez quelque chose !'></input>
                            
                            <button type='submit' name='boutonCommentaires' id='boutonCommentaires'>Commenter</button>

                        </div>)}
                    </div>
                </Fragment>
            );
        }
      }
    }

export default Article