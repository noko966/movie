import React, { Component } from 'react'
import styled from 'styled-components'

const Cont = styled.div`
    width: 50%;
    background-color: #e4e4e4;
    padding: 24px;
    color: #666;
    border-radius: 2px;
    margin-bottom: 24px;
    cursor: pointer;
`;

const Title = styled.h3`
    width: 100%;
    height: 30px;
    color: #666;
    font-size:20px;
`;

const Poster = styled.div`
    width: 180px;
    height: 270px;
    background-size: contain;
    flex-shrink: 0;
`;

const Description = styled.p`
    width: 100%;
    height: 50px;
    text-align:left;
    padding-left: 24px;
`;

const Row = styled.div`
    display: flex;
`;

export default class index extends Component {
  constructor(props){
    super(props)
    this.imagePath = 'https://image.tmdb.org/t/p/w500/';
  }

  substring = (str, start, end) => {
    return (str.substring(start, end) + '...');
  }

  render() {
    return (
      <Cont key={this.props.movie.id}>
        <Title>{this.props.movie.title}</Title>
        <Row>
          <Poster style={{backgroundImage: 'url(' + this.imagePath + this.props.movie.poster_path + ')'}}></Poster>
          <Description>{this.props.movie.overview}</Description>
        </Row>
      </Cont>
    )
  }
}
