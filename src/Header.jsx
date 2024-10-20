import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";



function ContainerExample() {
  return (
    <Container  style={{ backgroundColor: "black", color:"white", height:"100vh" }}>
        <ul style={{listStyleType:"none"}}>
            <li>
              <Link to="/">  Home</Link>
                </li>
            <li>
            <Link to="/about"> About</Link>
                </li>
            <li>
            <Link to="/services"> Services</Link>
                </li>
            <li>
            <Link to="/contact"> Contact</Link>
                </li>
        </ul>
        </Container>
    
  );
}

export default ContainerExample;