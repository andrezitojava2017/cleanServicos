import React from 'react';
import styled from 'styled-components/native';
import color from '../styles/colors.json';

const Container = styled.View`
  height: ${props => (props.height ? props.height : '150px')} ;
  width:  ${props => (props.width ? props.width : '150px')} ;
  background: red;
  border-radius:80px
  border-width: 1px;
  border-color: ${color.colors.white}
  align-items: center;
  justify-content: center;
`;

const TextName = styled.Text`
  font-size: ${props => (props.size ? props.size : '50px')};
  color: #ffffff;
  font-weight: 700;
`;

const Avatar = ({contHeight, contWidth}) => {
  return (
    <Container height={contHeight} width={contWidth}>
      <TextName>JA</TextName>
    </Container>
  );
};

export default Avatar;
