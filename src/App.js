import './App.css';
import {Header} from './components/header/header';
import {Container, Navbar} from "react-bootstrap";
import {CustomTable} from "./components/table/custom-table";
import {PageLayout} from "./components/layout/page-layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ItemList} from "./components/pages/item-list";
import {ItemCreate} from "./components/pages/item-create";
import {ItemUpdate} from "./components/pages/item-update";
import {ItemDetails} from "./components/pages/item-details";

function App() {
    return (
        <>
            <Header />
            <PageLayout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ItemList /> } />
                        <Route path="/new" element={<ItemCreate /> } />
                        <Route path="/{id}/update" element={<ItemUpdate /> } />
                        <Route path="/{id}" element={<ItemDetails /> } />
                    </Routes>
                </BrowserRouter>
            </PageLayout>
        </>
    );
}

export default App;
