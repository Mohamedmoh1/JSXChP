import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Description from './Components/Description';
import Name from './Components/Name';
import Pic from './Components/Pic';
import Price from './Components/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  var name = "Mohamed"
  return (
  <div>
   
   <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Card style={{ width: '18rem' }}>
        {name !== "" && <Pic/>}
        
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
          <Price/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



  
  
      
      <h1>{name === "" ? "Hello There !!! " : `Hello ${name}`}</h1>
  </div>
  );
}

export default App;
