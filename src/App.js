import './App.css';
import {CustomTable} from './components/header/custom-table';
import {Container, Navbar} from "react-bootstrap";

function App() {
    return (
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">React CC-CRUD</Navbar.Brand>
                </Container>
            </Navbar>
            <CustomTable/>
        </Container>
    );
}

export default App;
