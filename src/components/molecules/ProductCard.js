import React, { useState } from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  cursor: pointer;
  margin: 16px;
`

const ProductImageWrapper = styled.div`
  height: 300px;
  width: 300px;
`

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const ProductName = styled.h3`
  color: black;
  text-decoration: none;
`

const ProductPrice = styled.p`

`

const ProductCard = ({ product }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <ProductCardContainer onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <ProductImageWrapper>
        <ProductImage src={product.images[isHover ? 1 : 0]} />
      </ProductImageWrapper>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}{product.currency}</ProductPrice>
    </ProductCardContainer>
  )
}

export default ProductCard
