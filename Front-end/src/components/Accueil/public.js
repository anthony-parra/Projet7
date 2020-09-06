import React, { Fragment, Component } from 'react'

class Public extends Component {

      state = {
        homes: [],
            dataForm: {
                titre: '',
                article:''
            }
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

      render() {

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
                  <h2 id='titrePublic'>Les dernières actualités !</h2>
                  <div> { 
                        homes.map(home => 
                        <div id='newArticle' key={home.id}>

                            <p id= "titreNewArticle">{home.titre}</p>
                            <p id='blocArticle'>{home.article}</p>
                            <div id='commentaire_partage'>
                              <p className='blocPublicCommentairePartage'>Pour pouvoir commenter ou partager, veuillez vous inscrire ou vous identifier :)</p>
                            </div>

                        </div>
                        )}
                    </div>
                </div>

        </Fragment>

        )}
      }
    }

export default Public