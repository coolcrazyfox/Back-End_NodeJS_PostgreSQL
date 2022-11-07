import React, {Fragment, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditDevice = ({todo}) => {
    const [data, setDate] = useState(todo.data);
    const [brand, setBrand] = useState(todo.brand);
    const [model, setModel] = useState(todo.model);
    const [device, setDevice] = useState(todo.device);
    const [oem, setOem] = useState(todo.oem);
    const [price, setPrice] = useState(todo.price);

    const [link, setLinkAdr] = useState(todo.link);
    const [img, setImage] = useState(todo.img);
    const [categoriesId, setCategoriesId] = useState(todo.categories_id);


    const updateDevice = async (e) => {
        e.preventDefault();
        try {
            const body = {
                brand,
                model,
                device,
                oem,
                price,
                link,
                img,
                data,
                categoriesId

            };
            const response = await fetch(`http://localhost:8090/api/web/${todo.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/allsite";
        } catch (err) {
            console.error(err.message);
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelEditForm = () => (
        setDate(todo.data) ||
        setBrand(todo.brand) ||
        setModel(todo.model) ||
        setDevice(todo.device) ||
        setOem(todo.oem) ||
        setPrice(todo.price) ||
        setLinkAdr(todo.link) ||
        setImage(todo.img) ||
        setCategoriesId(todo.categories_id)
    )
    useEffect(() => {
        updateDevice()
    }, [])


    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose} onClick={handelEditForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Edit Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        placeholder="Edit date"
                        type="text"
                        className="form-control"
                        value={data}
                        onChange={e => setDate(e.target.value)}
                    />
                    <input
                        placeholder="Edit brand"
                        type="text"
                        className="form-control"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                    <input
                        placeholder="Edit model"
                        type="text"
                        className="form-control"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                    <input
                        placeholder="Edit device"
                        type="text"
                        className="form-control"
                        value={device}
                        onChange={e => setDevice(e.target.value)}
                    />
                    <input
                        placeholder="Edit OEM"
                        type="text"
                        className="form-control"
                        value={oem}
                        onChange={e => setOem(e.target.value)}
                    />
                    <input
                        placeholder="Edit price"
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <input
                        placeholder="Edit link"
                        type="text"
                        className="form-control"
                        value={link}
                        onChange={e => setLinkAdr(e.target.value)}
                    />
                    <input
                        placeholder="Edit image"
                        type="text"
                        className="form-control"
                        value={img}
                        onChange={e => setImage(e.target.value)}
                    />
                    <input
                        placeholder="Edit category"
                        type="text"
                        className="form-control"
                        value={categoriesId}
                        onChange={e => setCategoriesId(e.target.value)}
                    />

                </Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="warning" onHide={handleClose}*/}
                    {/*        // onClick={() => setModel(todo.model)}*/}
                    {/*>*/}
                    {/*    Close*/}
                    {/*</Button>*/}
                    <div size="sm">
                        <Button variant="primary" onClick={(e) => updateDevice(e)} size="sm">
                            Save Changes
                        </Button>
                    </div>


                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default EditDevice;
