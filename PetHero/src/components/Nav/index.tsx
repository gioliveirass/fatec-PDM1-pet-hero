import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Item, Label} from './styles';

interface NavProps {
  labels: string[];
  currentSection: string;
  onclick: (label: string) => void;
}

const Nav = ({labels, currentSection, onclick}: NavProps) => {
  return (
    <Container horizontal={true}>
      {labels.map((label, index) => (
        <TouchableOpacity key={index} onPress={() => onclick(label)}>
          <Item currentSection={currentSection} label={label}>
            <Label>{label}</Label>
          </Item>
        </TouchableOpacity>
      ))}
    </Container>
  );
};

export default Nav;
