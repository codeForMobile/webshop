import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const SearchBox = () => {
  const navigate = useNavigate()
  const {keyword: urlKeyword} = useParams()
  const [keyword, setKeyword] = useState(urlKeyword || '')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
        navigate(`/search/${keyword}`)
        setKeyword('');
    } else {
        navigate('/')
    }
}

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
        <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Enter search term'
            className='mr-sm-2 ml-sm-5'
            value={keyword}
            ></Form.Control>
            <Button type='submit' variant='outline-light' className='py-2 mx-2'>
            Search
            </Button>
    </Form>
  )
}

export default SearchBox