export const Header = () => {

    return (
        <header>
            <Navbar
                bg="primary"
                variant="dark"
                fixed="top"
                className="navbar-toggleable"
                expand="md"
                >
                    <Navbar.Brand as={link} to="/" className="bg-dark">
                        CC-Crud-App
                    </Navbar.Brand>
                    <Nav className="ml-3">
                        <Nav.Item>
                            <Link className="nav-link" role="button" to="/">Home</Link>
                        </Nav.Item>
                    </Nav>
            </Navbar>
        </header>
    )
}