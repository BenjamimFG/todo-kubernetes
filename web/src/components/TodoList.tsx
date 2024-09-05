import {
  Component,
  ContextType,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

import Todo from "../models/Todo";
import ApiService from "../services/api.service";
import { Checkbox, IconButton, styled } from "@mui/material";

import styles from "../styles/TodoList.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}:not(:last-child), &.${tableCellClasses.head}:not(:last-child)`]:
    {
      borderRight: "1px solid #ddd",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type Props = {
  fetchTodos: boolean;
  setFetchTodos: Dispatch<boolean>;
};

export default function TodoList({ fetchTodos, setFetchTodos }: Props) {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    try {
      setLoading(true);

      const todos = await ApiService.getTodos();

      setTodos(todos);
      setLoading(false);
    } catch (e) {
      alert("Erro ao carregar todos");
      console.error("Erro ao carregar todos", e);
    }
  };

  const updateTodo = async (id: number, done: boolean) => {
    try {
      await ApiService.patchTodo(id, done);

      loadTodos();
    } catch (e) {
      alert("Erro ao atualizar todo");
      console.error("Erro ao atualizar todo", e);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await ApiService.deleteTodo(id);

      loadTodos();
    } catch (e) {
      alert("Erro ao deletar todo");
      console.error("Erro ao deletar todo", e);
    }
  };

  useEffect(() => {
    if (!fetchTodos) return;

    loadTodos();
    setFetchTodos(false);
  }, [fetchTodos]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" width={"10%"}>
              Feito
            </StyledTableCell>
            <StyledTableCell align="left" width={"80%"}>
              Tarefa
            </StyledTableCell>
            <StyledTableCell align="center" width={"10%"}>
              Ações
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={3} align="center">
                Carregando...
              </TableCell>
            </TableRow>
          )}
          {!loading && todos.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} align="center">
                Nenhum todo registrado
              </TableCell>
            </TableRow>
          )}
          {!loading &&
            todos.length > 0 &&
            todos.map((todo) => (
              <StyledTableRow key={todo.id}>
                <StyledTableCell align="center">
                  <Checkbox
                    checked={todo.done}
                    onClick={() => updateTodo(todo.id, !todo.done)}
                  />
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  className={todo.done ? styles["striked-text"] : ""}
                >
                  {todo.task}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
