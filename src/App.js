import React, { Component } from 'react';
import GlobalStyle from './styles/reset'
import { connect } from 'react-redux';
import Wrapper from './components/centeredWrapper';
import Movie from './components/movie';
import Header from './components/header';
import Button from './button'



class App extends Component {


  handleChange = (e) => {
    this.makeAjaxRequest(e.target.value);
  }

  handeKeyDown = (e) => {
    
    if(e.keyCode === 13){
    this.makeAjaxRequest(e.target.value);
    }
    // e.preventDefault();
    // this.makeAjaxRequest(e.target.value);
  }

  makeAjaxRequest = (keyword) => {
    if(!keyword){
      this.props.queryProblem('empty string entered');
      return
    }
    fetch('https://api.themoviedb.org/3/search/movie?query='+ keyword +'&api_key=ef29a7acd8e976cdf8a796acdc31056d')
      .then(res => res.json())
      .then(
        (result) => {
          if(result.results.length < 1){
            this.props.queryProblem('no result');
            return
          }
          this.props.queryMovies(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  login = () => {
    this.props.setLogin(true)
  }

  logout = () => {
    this.props.setLogin(false)
  }

drawMovies = (arg) => {
  var ar = []
  arg.forEach(movie =>
    ar.push(<Movie key = {movie.id} movie={movie}>asd</Movie>)
    
  )
  return ar
}

  render() {
    console.log(this.props.movies)
    return (
      <div className="App">
        <GlobalStyle/>
        <Header>
          {this.props.isLogged ? <Button onClick={this.logout} text={'sign out'}></Button> : <Button onClick={this.login} text={'sign in'}></Button>}
        </Header>
        
        
        <Wrapper>
          <input onKeyDown={this.handeKeyDown} type="text"/>
        {this.drawMovies(this.props.movies)}
        {this.props.movieMessage}
        </Wrapper>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.login.isLogged,
    movies: state.movies.movies,
    movieMessage: state.movies.message

  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLogin: (bool) => {
      dispatch({type: 'LOGIN', isLogged: bool })
    },
    queryMovies: (data) => {
      dispatch({type: 'QUERY_MOVIES', data: data })
    },
    queryProblem: (message) => {
      dispatch({type: 'CLER_MOVIES_QUERY', message: message })
    }

    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
