import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.div`
    width: 100%;
    height:50px;
    display: flex;
    align-items: center;
    background-color: #2b2b2b;
    padding: 0 24px;
    color: #fff;
    margin-bottom: 24px;
`;

export default class index extends Component {
  render() {
    return (
      <Header>
        {this.props.children}
      </Header>
    )
  }
}
