import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { useGetProductsQuery, useCreateProductMutation, useDeleteProductMutation } from '../../slices/productsApiSlice'
import Paginate from '../../components/Paginate'

const ProductListScreen = () => {
  const { pageNumber: myPageNumber } = useParams()

  const {data, isLoading, error, refetch } = useGetProductsQuery({myPageNumber})
  const [createProduct, { isLoading: loadingCreate}] = useCreateProductMutation()
  const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation()

  const deleteHandler = async (id) => {
        if (window.confirm('Do you want to delete ?')) {
        try {
            await deleteProduct(id)
            toast.success('Product deleted successfully!')
            refetch()
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }
  }

  const createProductHandler = async () => {
    if (window.confirm('Do you want to create this product?')) {
        try {
            await createProduct()
            refetch()
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }
  }
    
  return (
    <>
        <Row className='align-items-center'>
            <Col>
                <h1>Products</h1>
            </Col>
            <Col className='text-end'>
                <Button className='btn-sm m-3' onClick={createProductHandler}>
                    <FaEdit/> Create Product
                </Button>
            </Col>
        </Row>

        {loadingCreate && <Loader/>}
        {loadingDelete && <Loader/>}
        { isLoading ? <Loader/> : error ? (<Message variant='danger'>{error}</Message>): (
            <>
            <Table striped hover bordered responsive className='table-sm'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Brand</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {data.products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                <Button variant='light' className='btn-sm mx-2'>
                                    <FaEdit/>
                                </Button>
                                </LinkContainer>
                            </td>
                            <td>
                                <Button variant='danger' className='btn-sm mx-2' onClick={() => deleteHandler(product._id)}>
                                    <FaTrash style={{ color: 'white'}}/>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Paginate pages={data.pages} page={data.page} isAdmin={true}/>
            </>
        )}
    </>
  )
}

export default ProductListScreen