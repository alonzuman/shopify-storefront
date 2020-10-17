import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: black;
  transition: .15s ease-in-out background-color;
  color: white;

  :hover {
    background-color: #1f1f1f;
  }
`

export default Button;
