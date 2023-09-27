import {Container, Nav, Navbar} from 'react-bootstrap';
import {Route} from "react-router-dom";
import {ItemList} from "../pages/item-list";
import {ItemCreate} from "../pages/item-create";
import {ItemUpdate} from "../pages/item-update";
import {ItemDetails} from "../pages/item-details";

export const Header = () => {

    return (
        <Navbar bg="secondary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">CRUD app</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/new">Create</Nav.Link>
                    {/*<Nav.Link href="/{id}/update">Update</Nav.Link>*/}
                    {/*<Nav.Link href="/{id}">Details</Nav.Link>*/}
                </Nav>
            </Container>
        </Navbar>
    )
}