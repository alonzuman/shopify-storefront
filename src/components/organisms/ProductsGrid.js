import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../../constants';
import ProductCard from '../molecules/ProductCard';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 64px;
`

const ProductsGrid = () => {
  return (
    <Grid>
      {products.map((v, i) => (
        <Link to={`/products/${v.name}`}>
          <ProductCard key={i} product={v} />
        </Link>
        )
      )}
    </Grid>
  )
}

export default ProductsGrid
