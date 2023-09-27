import './App.css';
import {Header} from './components/header/header';
import {Container} from "react-bootstrap";

function App() {
    return (
        <div>
            div works!
            <div>
                Here should be header
                <Header />
            </div>
            bellow is a container div
            <div className="container">
                container
            </div>
            <Container>
                And this is react container
            </Container>
        </div>
    );
}

export default App;
