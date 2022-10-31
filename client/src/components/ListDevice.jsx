import React, {Fragment, useEffect, useState} from "react";
import EditTodo from "./EditTodo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import ConnectedTvTwoToneIcon from '@mui/icons-material/ConnectedTvTwoTone';

import s from "../style/Table.module.css";
import ReactPaginate from "react-paginate";

// export interface ToDo {
//
//   id : string
//   model: string
//   country: string
//   device: string
//   oem : string
//   count_ebay : number
//   price_ebay : string
//   price_store: string
//   count_store: string
//   link_adr: string
//   image : string
//
// }

// interface ToDoContainer extends Array<ToDo> {}

export const baseUrl = "http://localhost:7000/device"

const ListDevice = () => {
    const [todos, setTodos] = useState([]);
    // console.log('1',todos)
    const [itemCarList, setItemCarList] = useState(todos.slice(0, 50))
    // console.log('2',todos.slice(0, 50))

    const [pageNumber, setPageNumber] = useState(0)

    const getTodos = async () => {
        try {
            const response = await fetch(baseUrl);
            const jsonData = await response.json();
            setTodos(jsonData);
            console.log('state',setTodos(jsonData))
        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(
                `baseUrl/${id}`,
                {
                    method: "DELETE",
                }
            );
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    const completeTodo = async (id) => {
        try {
            const body = {completed: true};
            const completeTodo = await fetch(
                `baseUrl${id}`,
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body),
                }
            );
            setTodos(
                todos.map((todo) => {
                    return todo.id === id ? {...todo, completed: true} : todo;
                })
            );
            // window.location.href = "/";
            window.location.reload();
        } catch (error) {
            console.error(error.message);
        }
    };


    const carsPerPage = 14
    const pagesVisited = pageNumber * carsPerPage
    const displayItemCarList = itemCarList
        .slice(pagesVisited, pagesVisited + carsPerPage)
        .map(t => {
            return (
                <Table
                    key={t.id}
                    model={t.model}
                    country={t.country}
                    device={t.device}
                    oem={t.oem}
                    count_ebay={t.count_ebay}
                    price_ebay={t.price_ebay}
                    price_store={t.price_store}
                    count_store={t.count_store}
                    link_adr={t.link_adr}
                    image={t.image}

                />

                // <tr key={t.id}>
                //   <td >{t.model}</td>
                //   <td >{t.country}</td>
                //   <td >{t.device}</td>
                //   <td >{t.oem}</td>
                //   <td >{t.count_ebay}</td>
                //   <td >{t.price_ebay}</td>
                //   <td >{t.price_store}</td>
                //   <td >{t.count_store}</td>
                //   <td >
                //     <a href={t.link_adr}>link</a>
                //   </td>
                //   <td >
                //     <a href={t.image}>image</a>
                //   </td>
                //   <td ><button>Edit</button></td>
                //   <td ><button>Delete</button></td>
                // </tr>
            )

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
    const pageCountItem = Math.ceil(itemCarList.length / carsPerPage)
    // console.log('pageCountItem', pageCountItem)

    const changePage = ({selected}) => {
        setPageNumber(selected)
        // console.log('setPageNumber', setPageNumber(selected))
    }
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <div className={s.tab_container}>
                <table className={s.table}>
                    <thead>
                    {/*<Search/>*/}
                    <tr>
                        <th>Model</th>
                        <th>Country</th>
                        <th>Device</th>
                        <th>OEM</th>
                        <th>Count_ebay</th>
                        <th>price_ebay</th>
                        <th>price_store</th>
                        <th>count_store</th>
                        <th>Count_ebay</th>
                        <th>Link</th>
                        <th>image</th>
                        <th>Edit</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*{todos*/}
                    {/*    // .sort((a, b) => +a.completed - +b.completed)*/}
                    {/*    .map((todo) => {*/}
                    {/*      return (*/}
                    {/*          <tr key={todo.id}>*/}
                    {/*            <td >{todo.model}</td>*/}
                    {/*            <td >{todo.country}</td>*/}
                    {/*            <td >{todo.device}</td>*/}
                    {/*            <td >{todo.oem}</td>*/}
                    {/*            <td >{todo.count_ebay}</td>*/}
                    {/*            <td >{todo.price_ebay}</td>*/}
                    {/*            <td >{todo.price_store}</td>*/}
                    {/*            <td >{todo.count_store}</td>*/}
                    {/*            <td >*/}
                    {/*              <a href={todo.link_adr}>link</a>*/}
                    {/*            </td>*/}
                    {/*            <td >*/}
                    {/*              <a href={todo.image}>image</a>*/}
                    {/*            </td>*/}
                    {/*            <td ><button>Edit</button></td>*/}
                    {/*            <td ><button>Delete</button></td>*/}
                    {/*          </tr>*/}
                    {/*      )*/}
                    {/*    })*/}
                    {/*}*/}

                    {displayItemCarList}
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

                    </tbody>
                </table>
            </div>


        </Fragment>
    );
};

export default ListDevice;
