import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  margin-bottom: .5rem;
`

const H2 = styled.h2`
`

const H3 = styled.h3`
  font-weight: 400;
  margin-bottom: .5rem;
`

const P = styled.p`

`

const Typography = ({ variant, style, className, children }) => {
  switch (variant) {
    case 'h1': return <H1 style={style} className={className}>{children}</H1>;
    case 'h2': return <H2 style={style} className={className}>{children}</H2>;
    case 'h3': return <H3 style={style} className={className}>{children}</H3>;
    default: return <P style={style} className={className}>{children}</P>
  }
}

export default Typography
