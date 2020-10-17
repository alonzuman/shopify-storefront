import React from 'react';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: ${p => p.minHeight}px;
`

const Container = ({ children }) => {
  const { windowHeight } = useWindowSize()

  return (
    <PageContainer minHeight={windowHeight - 50}>
      {children}
    </PageContainer>
  )
}

export default Container
