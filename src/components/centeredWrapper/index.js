import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 1200px;
    background-color: #f4f4f4;
    padding: 24px;
    color: #666;
    margin: 0 auto;
    height: 100%;
    min-height: 50vh;
`;

export default function index(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}
