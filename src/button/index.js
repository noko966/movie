import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border:0;
    outline:0;
    height:30px;
    border-radius: 3px;
    padding: 0 20px;
    cursor: pointer;
`;

export default function index(props) {
  return (
    <Button onClick={props.onClick}>
        {props.text}
    </Button>
  )
}
