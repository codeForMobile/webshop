import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import * as texts from "../texts"

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <Nav className="justify-content-center mb-4">
        <Nav.Item>
            {
                step1? (
                    <LinkContainer to={texts.loginRoute}>
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
                    <LinkContainer to={texts.shippingRoute}>
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
                    <LinkContainer to={texts.paymentRoute}>
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
                    <LinkContainer to={texts.placeorderRoute}>
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