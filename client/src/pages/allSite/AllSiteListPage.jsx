import React, {Fragment, useEffect, useRef, useState} from 'react';

import s from "../../style/Table.module.css";
import {Pagination} from "../../common/c12-Pagination/Pagination";
import EditDevice from "../../components/EditDevice";
import {BsFillFolderSymlinkFill, BsImage} from "react-icons/bs";
import SearchInput from "../../components/search/SearchInput";
import {useScroll} from '../../hook/useScroll'


export const baseUrl = "http://localhost:8090/api/web/t"

const AllSiteListPage = () => {
    const [todos, setTodos] = useState([]);
    const [category, setCategory] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [devicePerPage] = useState(10)

    // scroll
    const hasScroll = todos.length > 4
    const todoWrapper = useRef(null)
    useScroll(todoWrapper, hasScroll)


    const getTodos = async () => {
        try {
            setLoading(true)
            const response = await fetch(baseUrl);
            const jsonData = await response.json();
            setTodos(jsonData);
            setLoading(false)
            // console.log('state',setTodos(jsonData))

        } catch (error) {
            console.error(error.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(
                `http://localhost:8090/api/web/${id}`,
                {
                    method: "DELETE",
                }
            );
            setTodos(todos.filter((todo) => todo.id !== id));

        } catch (error) {
            console.error(error.message);
        }
    };
    const getCategory = async () => {
        try {
            setLoading(true)
            const response = await fetch("http://localhost:8090/api/cat");
            const jsonData = await response.json();
            setCategory(jsonData);
            setLoading(false)
            // console.log('state',setTodos(jsonData))

        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getTodos();
        deleteTodo();
        getCategory()
        console.log('getTodos', getTodos)
        console.log('deleteTodo', deleteTodo)


    }, []);

    // pagination

    const lastIndex = currentPage * devicePerPage
    const firstIndex = lastIndex - devicePerPage
    const currentDevice = todos.slice(firstIndex, lastIndex)
    const paginate = (pageNum) => setCurrentPage(pageNum)

    //search

    // const [searchValue, setSearchValue]= useState('')
    const filterDevice = todos.filter((dev) => {
        return dev.oem.toLowerCase().includes(searchValue.toLowerCase())
    })
    //name site


    return (
        <Fragment>
            {/*{loading && <Loader/>}*/}
            {/*{error && <ErrorMessage error={error}/>}*/}


            <div className={s.tab_container}>
                <div className={s.header_title_tab}>

                    <Pagination totalCount={todos.length}

                                pageSize={devicePerPage}
                                currentPage={currentPage}
                                onChangedPage={paginate}/>

                    <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>


                </div>

                <table className={s.table_first}>
                    <thead>
                    <tr>
                        {/*<th>id</th>*/}
                        {/*<th>C_id</th>*/}
                        <th>Date</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Device</th>
                        <th>OEM</th>
                        {category.map((c) =>  <th key={c.id}>{c.name}</th> )}

                        <th>Link</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>

                </table>

                <table className={s.table}>

                    <div style={{height: hasScroll ? '285px' : 'auto', minHeight: '120px'}} ref={todoWrapper}>

                        <thead>
                        <tr>
                            {/*<th>id</th>*/}
                            {/*<th>C_id</th>*/}
                            <th>Date</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Device</th>
                            <th>OEM</th>
                            {/*{category.map((c) =>  <th key={c.id}>{c.name}</th> )}*/}
                            <th>name</th>
                            <th>Link</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            filterDevice

                                // currentDevice
                                // todos
                                // .sort((a, b) => +a.completed - +b.completed)
                                .map((todo) => {
                                        return (
                                            <tr key={todo.id}>
                                                {/*<td>{todo.id}</td>*/}
                                                {/*<td>{todo.categories_id}</td>*/}
                                                <td>{todo.data}</td>
                                                <td>{todo.brand}</td>
                                                <td>{todo.model}</td>
                                                <td>{todo.device}</td>
                                                <td>{todo.oem}</td>
                                                {todo.categories_id===1 ?(
                                                <td>{todo.price}</td>): <td></td>}
                                                {todo.categories_id===2 ?(
                                                    <td>{todo.price}</td>): <td></td>}
                                                {todo.categories_id===3 ?(
                                                    <td>{todo.price}</td>): <td></td>}
                                                {todo.categories_id===4 ?(
                                                    <td>{todo.price}</td>): <td></td>}
                                                {todo.categories_id===5 ?(
                                                    <td>{todo.price}</td>): <td></td>}
                                                {todo.categories_id===6 ?(
                                                    <td>{todo.price}</td>): <td></td>}
                                                {todo.categories_id===7 ?(
                                                    <td>{todo.price}</td>): <td></td>}
                                                {/*{category.map((c) =>  <td key={c.id}>{c.id}</td> )}*/}

                                                <td>
                                                    <a href={todo.link}>
                                                        <BsFillFolderSymlinkFill/>
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href={todo.img}>
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
                                                        onClick={() => deleteTodo(todo.id)}
                                                        // onClick={() => {}}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>)

                                    }
                                )
                        }


                        </tbody>
                    </div>
                </table>


            </div>
        </Fragment>
    );
};

export default AllSiteListPage;
