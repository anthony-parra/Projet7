import React, { Component, Fragment } from 'react'
import '../../articles.css'
import SingleArticle from './SingleArticle/SingleArticle'

class RecuperationArticles extends Component {

    state = {
        error: null,
        isLoaded: false,
        homes: [],
    }

    fetchGetArticle = () => {

        const token = localStorage.getItem('token')
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization',`Bearer ${token}`)

        fetch('http://localhost:3000/api/article/allArticle', {

            method: 'GET',
            headers: myHeaders
        })
        
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
                        homes.map(home => <SingleArticle 
                            key={home.post_id}
                            id={home.post_id} 
                            titre={home.titre} 
                            article={home.article}
                            date={home.date}
                            comments={home.comments}
                            author={home.author}
                            />)   
                    }   
                    </div>
                </Fragment>
            )
          }
    }
}

export default RecuperationArticles