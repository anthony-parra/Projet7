import React, { Component, Fragment } from 'react'
import '../../oneArticle.css'

class PostCommentaire extends Component {

    state = {
        dataCommentaire : '',
        postCommentaire: false,
    }

    handleChangeCommentaire = (event) => {
        this.setState({
            dataCommentaire: event.target.value,
        })
    } 

    handleClickPost = () => {
        const postCommentaire = !this.state.postCommentaire
        this.setState({ postCommentaire })
    }

      render() {
        
        let { postCommentaire } = this.state
        let { click } = this.props

            return (

                <Fragment>
                    <button onClick= {this.handleClickPost} id='commentaireArticleClickedPost'>Poster un commentaire</button>
                    {   
                        postCommentaire 
                            ? 
                        <form id='formClicked' onSubmit={(e) => { 
                            e.preventDefault(); 
                            click(e, this.props.post_id, this.state.dataCommentaire); 
                            this.setState({ dataCommentaire: '' })
                        }}>

                            <label htmlFor='commentaires' name='commentaires'/>
                            <input onChange= { this.handleChangeCommentaire } value={this.state.dataCommentaire} className='commentaires' name='commentaires' type='text' placeholder='Écrivez quelque chose !' required ></input>
                            
                            <input type='submit' className='boutonCommentaires' value='Poster commentaire'></input>
                                
                        </form>
                            : 
                        <Fragment />
                    }
                </Fragment>
            )
        }
      }

export default PostCommentaire