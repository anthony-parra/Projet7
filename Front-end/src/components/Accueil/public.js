/*import React, { Fragment, Component } from 'react'

class Public extends Component {

      state = {
        homes: [],
            dataForm: {
                titre: '',
                article:''
            },
            id:'',
            homesCommentaire: [],
            nombreCommentaire: false,
      }

      fetchGetArticle = () => {
        fetch('http://localhost:3000/api/article/allArticle')
          .then(res => res.json())
          .then((result) => {
              this.setState({
                isLoaded: true,
                homes: result
              })
            })
            .catch((error)=> { this.setState({
                isLoaded: true,
                error
            });
            })
    }

    fetchGetCommentaire = () => {
      fetch(`http://localhost:3000/api/commentaire/allCommentaire`)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                homesCommentaire: result
            })
            })
          .catch((error)=> { this.setState({
              isLoaded: true,
              error
          });
          })
  }

  handleClickCommentaire = () => {
    const nombreCommentaire = !this.state.nombreCommentaire
    this.setState({ nombreCommentaire })
}

    componentDidMount(){
      this.fetchGetArticle()
      this.fetchGetCommentaire()
    }

      render() {

      const { error, isLoaded, homes, homesCommentaire, nombreCommentaire } = this.state
      const homeCommentaire = homesCommentaire.length
    
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
                        <div onClick= {this.handleClick} id='newArticle' key={home.id}>
                            <p id= "titreNewArticle">{home.titre}</p>
                            <p id='blocArticle'>{home.article}</p>
                            <div id='commentaire_partage'>
                              <p className='blocPublicCommentairePartage'>Pour pouvoir commenter, veuillez vous inscrire ou vous identifier :)</p>
                              <button id='boutonPartager'>Partager</button>
                        <button onClick = { this.handleClickCommentaire } id='nombresCommentaires'> {homeCommentaire} commentaires</button>
                            </div>
                            <div> {

                              nombreCommentaire ?

                              homesCommentaire.map(homeCommentaire => 
                              <div id='newCommentaire' key={homeCommentaire.id}>
                                  <p>{homeCommentaire.commentaire}</p>
                              </div>)

                              : <Fragment />

                            }</div>
                        </div>
                        )}
                    </div>
                </div>

        </Fragment>
        )}
      }
    }

export default Public*/