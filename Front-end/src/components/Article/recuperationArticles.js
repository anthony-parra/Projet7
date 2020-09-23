import React, { Component, Fragment } from 'react'
import '../Article/article.css'
import Single from './Single/Single';

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
                        homes.map(home => <Single 
                            key={home.post_id}
                            id={home.post_id} 
                            titre={home.titre} 
                            article={home.article}
                            comments={home.comments}
                            />)   
                    }   
                    </div>
                </Fragment>
            )
          }
    }
}

export default RecuperationArticles