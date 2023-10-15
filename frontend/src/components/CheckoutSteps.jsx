import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import * as texts from "../texts"

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <Nav className="justify-content-center mb-4">
        <Nav.Item>
            {
                step1? (
                    <LinkContainer to='/login'>
                        <Nav.Link>{texts.signInText}</Nav.Link>
                    </LinkContainer>
                ) : (
                  <Nav.Link disabled>{texts.signInText}</Nav.Link>  
                )
            }
        </Nav.Item>
        <Nav.Item>
            {
                step2? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>{texts.shippingText}</Nav.Link>
                    </LinkContainer>
                ) : (
                  <Nav.Link disabled>{texts.shippingText}</Nav.Link>  
                )
            }
        </Nav.Item>
        <Nav.Item>
            {
                step3? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>{texts.paymentText}</Nav.Link>
                    </LinkContainer>
                ) : (
                  <Nav.Link disabled>{texts.paymentText}</Nav.Link>  
                )
            }
        </Nav.Item>
        <Nav.Item>
            {
                step4? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>{texts.placeorderText}</Nav.Link>
                    </LinkContainer>
                ) : (
                  <Nav.Link disabled>{texts.placeorderText}</Nav.Link>  
                )
            }
        </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps