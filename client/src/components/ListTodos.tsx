import React, { Fragment, useEffect, useState } from "react";
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
import Pagination from "./Pagination";

export interface ToDo {
  id : string
  model: string
  country: string
  device: string
  oem : string
  count_ebay : string
  price_ebay : string
  price_store: string
  count_store: string
  link_adr: string
  image : string
  datetime : string
}

interface ToDoContainer extends Array<ToDo> {}

export const baseUrl = "http://localhost:7000/device"

const ListTodos = () => {
  const [todos, setTodos] = useState<ToDoContainer>([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage]= useState(1)
  const [devicePerPage]= useState(25)


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

  const deleteTodo = async (id: string) => {
    try {
      const deleteTodo = await fetch(
        `http://localhost:7000/device/${id}`,
        {
          method: "DELETE",
        }
      );
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
    console.log('getTodos',getTodos)

  }, []);
  const lastIndex = currentPage * devicePerPage
  const firstIndex = lastIndex - devicePerPage
  const currentDevice = todos.slice(firstIndex, lastIndex)
  const paginate = (pageNum:number) => setCurrentPage(pageNum)

  return (
    <Fragment>
      <Pagination
          devicePerPage={devicePerPage}
          totalDevice={todos.length}
          paginate={paginate}
      />
      <Table sx={{ mt: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell>model</TableCell>
            <TableCell>country</TableCell>
            <TableCell>device</TableCell>
            <TableCell>oem</TableCell>
            <TableCell>count_ebay</TableCell>
            <TableCell>price_ebay</TableCell>
            <TableCell>price_store</TableCell>
            <TableCell>count_store</TableCell>
            <TableCell>link_adr</TableCell>
            <TableCell>image</TableCell>
            <TableCell >___Date___</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {currentDevice
            // todos
            // .sort((a, b) => +a.completed - +b.completed)
            .map((todo) => {
              return (
                <TableRow key={todo.id}>
                  <TableCell>
                    {todo.model}
                  </TableCell>
                  <TableCell>
                    {todo.country}

                  </TableCell>
                  <TableCell>
                    {todo.device}

                  </TableCell>
                  <TableCell>
                    {todo.oem}
                  </TableCell>
                  <TableCell>
                    {todo.count_ebay}
                  </TableCell>
                  <TableCell>
                    {todo.price_ebay}
                  </TableCell>
                  <TableCell>
                    {todo.price_store}
                  </TableCell>
                  <TableCell>
                    {todo.count_store}
                  </TableCell>
                  <TableCell>
                    <ConnectedTvTwoToneIcon/>
                    {todo.link_adr}
                  </TableCell>
                  <TableCell>
                    {todo.image}
                  </TableCell>
                  <TableCell>
                    {todo.datetime}
                    {/* <IconButton
                      component="button"
                      // onClick={() => completeTodo(todo.id)}
                      // disabled={todo.completed}
                      color="success"
                    >
                      <DoneIcon /> */}
                    {/* </IconButton> */}
                  </TableCell>
                  <TableCell>

                    <IconButton
                        component="button"
                        // onClick={() => <EditTodo todo={todo}/> }
                        color="warning"
                    >
                    {/*<EditTodo todo={todo} />*/}

                    </IconButton>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      component="button"
                      onClick={() => deleteTodo(todo.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

    </Fragment>
  );
};

export default ListTodos;
