import React from 'react';
import Form from './Form'
import ItemList from './ItemList'
import {connect} from 'react-redux'

class App extends  React.Component {


    state = {articles: [] }

    addArticle = (article) => {
        let oldArticles = this.state.articles
        article.id = Date.now()
        let newArticles = [...oldArticles, article]
        this.setState({articles: newArticles})
    }

    render(){
        return(
            <div>
                <h3>Liste de courses</h3>
                <Form   addArticle={this.addArticle}/>
                <ItemList  articles={this.state.articles}/>
            </div>
        )
    }
} //end

const mapStateToProps = (state) => {
    return {
        articles : state.articles
    }
}

export default connect(mapStateToProps)(App);
//export default connect(mapStateToProps, mapDispatchToProps)(App);