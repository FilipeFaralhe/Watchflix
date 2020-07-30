import styled from "styled-components";

//Transforma o button em link
//import Link from 'react-router-dom';
//styled(Link)

//& comercial referencia o button
const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--primary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  
  &:hover{
    background-color: var(--primary);
  }
  
`;

export default Button;