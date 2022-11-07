import React, {Fragment, useState} from "react";
import Button from "react-bootstrap/Button";


export const baseUrl = "http://localhost:8090/api/web"

const InputAllSite = () => {
    const [data, setDate] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [device, setDevice] = useState("");
    const [oem, setOem] = useState("");
    const [price, setPrice] = useState("");
    const [siteName, setSiteName] = useState("");
    const [link, setLink] = useState("");
    const [img, setImage] = useState("");
    const [categoriesId, setCategoriesId]= useState(null)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitForm = async e => {
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
                categoriesId };
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/allsite";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <div style={{fontSize: '12px',background: '#f3f3f3', marginLeft: '30px', marginRight: '30px', borderRadius: '10px'}}>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>

                        <th scope="col">Date</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Device</th>
                        <th scope="col">OEM</th>
                        <th scope="col">Price</th>
                        <th scope="col">Link</th>
                        <th scope="col">Image</th>
                        <th scope="col">Category-Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {/* <th scope="row">-</th> */}
                        <td>
                            <input
                                placeholder="Send date"
                                type="text"
                                className="form-control"
                                value={data}
                                onChange={e => setDate(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="Send brand"
                                type="text"
                                className="form-control"
                                value={brand}
                                onChange={e => setBrand(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="Send model"
                                type="text"
                                className="form-control"
                                value={model}
                                onChange={e => setModel(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="Send device"
                                type="text"
                                className="form-control"
                                value={device}
                                onChange={e => setDevice(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="Send OEM"
                                type="text"
                                className="form-control"
                                value={oem}
                                onChange={e => setOem(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="Send price"
                                type="text"
                                className="form-control"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </td>

                        <td>
                            <input
                                placeholder="Send link"
                                type="text"
                                className="form-control"
                                value={link}
                                onChange={e => setLink(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="Send image"
                                type="text"
                                className="form-control"
                                value={img}
                                onChange={e => setImage(e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                placeholder="Send number of category"
                                type="number"
                                className="form-control"
                                value={categoriesId}
                                onChange={e => setCategoriesId(e.target.value)}
                            />
                        </td>
                        <td>
                            <div size="sm">
                                <Button variant="info" onClick={e => onSubmitForm(e)} size="sm">
                                    Add
                                </Button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


        </Fragment>
    );
};

export default InputAllSite;
