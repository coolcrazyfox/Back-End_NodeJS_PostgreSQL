import React, {Fragment, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditDevice = ({todo}) => {
    const [model, setModel] = useState(todo.model);
    const [country, setCountry] = useState(todo.country);
    const [device, setDevice] = useState(todo.device);
    const [oem, setOem] = useState(todo.oem);
    const [count_ebay, setCountEbay] = useState(todo.count_ebay);
    const [price_ebay, setPriceEbay] = useState(todo.price_ebay);
    const [price_store, setPriceStore] = useState(todo.price_store);
    const [count_store, setCountStore] = useState(todo.count_store);
    const [link, setLinkAdr] = useState(todo.link);
    const [image, setImage] = useState(todo.image);
    const [datetime, setDateTime] = useState(todo.datetime);

    const updateDevice = async e => {
        e.preventDefault();
        try {
            const body = {
                model,
                country,
                device,
                oem,
                count_ebay,
                price_ebay,
                price_store,
                count_store,
                link,
                image,
                datetime
            };
            const response = await fetch(`http://localhost:7000/device/${todo.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose} onClick={() => setModel(todo.model)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        placeholder="Edit model"
                        type="text"
                        className="form-control"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                    <input
                        placeholder="Edit country"
                        type="text"
                        className="form-control"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
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
                        placeholder="Edit count_ebay"
                        type="text"
                        className="form-control"
                        value={count_ebay}
                        onChange={e => setCountEbay(e.target.value)}
                    />
                    <input
                        placeholder="Edit price_ebay"
                        type="text"
                        className="form-control"
                        value={price_ebay}
                        onChange={e => setPriceEbay(e.target.value)}
                    />
                    <input
                        placeholder="Edit price_store"
                        type="text"
                        className="form-control"
                        value={price_store}
                        onChange={e => setPriceStore(e.target.value)}
                    />
                    <input
                        placeholder="Edit count_store"
                        type="text"
                        className="form-control"
                        value={count_store}
                        onChange={e => setCountStore(e.target.value)}
                    />
                    <input
                        placeholder="Edit date"
                        type="text"
                        className="form-control"
                        value={datetime}
                        onChange={e => setDateTime(e.target.value)}
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
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />

                </Modal.Body>
                <Modal.Footer>
                    {/*<Button variant="warning" onClick={() => setModel(todo.model)}>*/}
                    {/*    Close*/}
                    {/*</Button>*/}
                    <div size="sm">
                        <Button variant="primary" onClick={e => updateDevice(e)} size="sm">
                            Save Changes
                        </Button>
                    </div>


                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default EditDevice;
