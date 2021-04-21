import React from 'react';
import styled from 'styled-components';

export interface StaticTextComponentProps {
  text: string;
  textColor?: string;
  fontSize?: string;
  backgroundColor?: string;
}

export default ({ text, textColor, fontSize, backgroundColor }: StaticTextComponentProps) => (
  <StyledText textColor={textColor} fontSize={fontSize} backgroundColor={backgroundColor}>
    {text}
  </StyledText>
);

interface StyledProps {
  textColor?: string;
  fontSize?: string;
  backgroundColor?: string;
}

const StyledText = styled.div<StyledProps>`
  width: 100%;
  color: ${(props) => props.textColor || '#333'};
  font-size: ${(props) => props.fontSize || '14px'};
  background-color: ${(props) => props.backgroundColor || '#fff'};
`;
