import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <Row>
    {
      sampleProducts.map((product)=>(
        <Col key={product.slug} sm={6} md={4} lg={3}>
            <Link to={'/product/'+product.slug} className=''>
            <img  src={product.image}
            alt={product.image} 
            className="product-image"
             />
          <h2>{product.name}</h2>
            </Link>
          <p>${product.price}</p>
        </Col>
      ))}
  </Row>
  )
}