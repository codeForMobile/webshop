import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Product from '../components/Product.jsx'
import Paginate from '../components/Paginate.jsx'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

const HomeScreen = () => {
  const { pageNumber: myPageNumber } = useParams()
  const { data, isLoading, error } = useGetProductsQuery({myPageNumber})

  return (
    <>{ isLoading? (
      <Loader/>
    ) : error ? (
      <Message variant='danger'>{error?.data?.message || error.error }</Message>
    ) : (    
    <>
      <h1>Latest Products</h1>
      <Row>
        {data.products.map((product) =>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <h3>
                    <Product product={product}/>
                </h3>
            </Col>)
        )}
      </Row>
      <Paginate
        pages={data.pages}
        page={data.page}
      />
    </>
    )}
    </>

  )
}

export default HomeScreen
