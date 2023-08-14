import Container from "react-bootstrap/Container"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./BBlogo.PNG"

function NavbarLight () {
    return (
        <>
        {/* white colored nav bar with logo and app title */}
        <Navbar bg="white" data-bs-theme="light">
          <Container>
            <Nav className="me-auto">
            <img src={logo} alt="logo" width={50} height={50}/>
            <h1>BudgetBest</h1>
            </Nav>
          </Container>
      </Navbar>
        </>
    )
}

export default NavbarLight