import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { heroSlides } from '../../constants'
import Button from '../atoms/Button'
import Typography from '../atoms/Typography'

const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  height: 90vh;
`

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const HeroText = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: white;
`

const Hero = () => {
  return (
    <HeroContainer>
      {heroSlides.map((v, i) => (
        <Link to={v.path}>
          <HeroImageWrapper>
            <HeroImage src={v.img} />
            <HeroText>
              <Typography variant='h1'>{v.header}</Typography>
              <Typography variant='h3'>{v.subheader}</Typography>
              <Button>{v.buttonLabel}</Button>
            </HeroText>
          </HeroImageWrapper>
        </Link>
      ))}
    </HeroContainer>
  )
}

export default Hero
