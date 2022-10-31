import React, {useState} from 'react';
// @ts-ignore
import '../../style/Modal.css'
import Table from "../table/Table";
import s from "../../style/Table.module.css";
import ReactPaginate from "react-paginate";
import {BsFillFolderSymlinkFill, BsImage} from "react-icons/bs";
import EditDevice from "../EditDevice";

const Modal = ({active, setActive, children,oemList}) => {
    const [itemCarList, setItemCarList] = useState(oemList.slice(0, 51))

    const [pageNumber, setPageNumber] = useState(0)

    const carsPerPage = 10
    const pagesVisited = pageNumber * carsPerPage
    const displaySearch = itemCarList
        .slice(pagesVisited, pagesVisited + carsPerPage)
        .map(todo => {
            return(
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
                <td>
                    {/*<button onClick={()=><EditDevice todo={todo}/>}>Edit</button>*/}
                    <EditDevice todo={todo}/>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        // onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>)
            // <Table
            //     key={i.index}
            //     car_model={i.car_model}
            //     car_model_title={i.car_model_title}
            //     car_OEM={i.car_OEM}
            //     date={i.date}
            //     shop_price={i.shop_price}
            //     warehouse={i.warehouse}
            //     link={i.link}
            // />
        })
    const pageCountItem = Math.ceil(itemCarList.length/carsPerPage)
    const changePage = ({selected}) =>{
        setPageNumber(selected)
    }
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ?
                'modal_content active' :
                'modal_content'}
                 onClick={e => e.stopPropagation()}>
                {/*{children}*/}
                {/*if you need*/}
                <table className={'table_modal'}>
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
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displaySearch}
                    <ReactPaginate
                        onPageChange={changePage}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        pageCount={pageCountItem}
                        containerClassName={s.paginationBttns}
                        previousLinkClassName={s.previousBttn}
                        nextLinkClassName={s.nextBttn}
                        disabledClassName={s.paginationDisabled}
                        activeClassName={s.paginationActive}
                    />
                    {/*<tr>*/}
                    {/*    <td>Pome</td>*/}
                    {/*    <td>200</td>*/}
                    {/*    <td>89815-50020</td>*/}
                    {/*    <td>11.04.2022</td>*/}
                    {/*    <td>*/}
                    {/*        <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=89815-50020&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                    {/*        </a>*/}
                    {/*    </td>*/}
                    {/*    <td>*/}
                    {/*        <img src={'https://i.ebayimg.com/thumbs/images/g/UNAAAOSwgHxg9uaq/s-l225.webp'}*/}
                    {/*             alt={'#'}/>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>Kipr</td>*/}
                    {/*    <td>250</td>*/}
                    {/*    <td>89815-50020</td>*/}
                    {/*    <td>12.04.2022</td>*/}
                    {/*    <td>*/}
                    {/*        <a href="https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4">https://www.ebay.de/sch/i.html?_from=R40&_nkw=88150-50030&_sacat=0&_sop=2&rt=nc&LH_ItemCondition=4*/}

                    {/*        </a>*/}
                    {/*    </td>*/}
                    {/*    <td>*/}
                    {/*        <img src={'https://i.ebayimg.com/thumbs/images/g/UNAAAOSwgHxg9uaq/s-l225.webp'}*/}
                    {/*             alt={'#'}/>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Modal;
