import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {BsFillFolderSymlinkFill, BsImage} from "react-icons/bs";
import s from "../style/Table.module.css";
import {Pagination} from "../common/c12-Pagination/Pagination";


const SearchForm = ({todo}) => {
    const values = [true, 'sm-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const [searchValue, setSearchValue]= useState('')
    const filterDevice=todo.filter((dev)=>{
        return dev.oem.toLowerCase().includes(searchValue.toLowerCase())
    })
    return (
        <form>
            <input type="text"
                   placeholder='Search'
                   // onClick={() => setShow(true)}
                   onChange={(e)=>{
                       return setShow(true)
                       setSearchValue(e.target.value)}} />

            {/*<Button variant="primary" onClick={() => setShow(true)}>*/}
            {/*    Search*/}
            {/*</Button>*/}
            <Modal
                size="sm-down"
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
                // dialogClassName="modal-100w"
                // aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                    <input type="text" placeholder='Search' onChange={(e)=>{setSearchValue(e.target.value)}} />

                </Modal.Header>
                <Modal.Body>

                        <Table striped bordered hover variant="dark">

                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Country</th>
                                    <th>Device</th>
                                    <th>OEM</th>
                                    <th>Count_ebay</th>
                                    <th>Price_ebay $</th>
                                    <th>Price_store $</th>
                                    <th>Count_store</th>
                                    <th>Date</th>
                                    <th>Link</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                filterDevice
                                    .map((todo) => {
                                            return (
                                                <tr key={todo.id}>
                                                    <td>{todo.model}</td>
                                                    <td>{todo.country}</td>
                                                    <td>{todo.device}</td>
                                                    <td>{todo.oem}</td>
                                                    <td>{todo.count_ebay}</td>
                                                    <td>{todo.price_ebay}</td>
                                                    <td>{todo.price_store}</td>
                                                    <td>{todo.count_store}</td>
                                                    <td>{todo.datetime}</td>
                                                    <td>
                                                        <a  href={todo.link}>
                                                            <BsFillFolderSymlinkFill/>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href={todo.image}>
                                                            <BsImage/>
                                                        </a>
                                                    </td>

                                                </tr>)})}
                            </tbody>
                        </Table>

                </Modal.Body>
            </Modal>
        </form>
    );
};

export default SearchForm;
