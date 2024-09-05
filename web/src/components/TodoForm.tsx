import { Button, TextField } from "@mui/material";
import { Dispatch, useState } from "react";

import styles from "../styles/TodoForm.module.css";
import ApiService from "../services/api.service";

type Props = {
  setFetchTodos: Dispatch<boolean>;
};

export default function TodoForm({ setFetchTodos }: Props) {
  const [task, setTask] = useState("");

  const createTodo = async () => {
    if (task.length === 0) return;

    try {
      await ApiService.createTodo(task);

      setTask("");

      setFetchTodos(true);
    } catch (e) {
      alert("Erro ao criar Todo");
      console.log("Erro ao criar Todo");
    }
  };

  return (
    <div className={styles["form-container"]}>
      <TextField
        id="outlined-basic"
        label="Tarefa"
        variant="outlined"
        className={styles["task-input"]}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        slotProps={{ htmlInput: { maxLength: 512 } }}
      />
      <Button
        variant="contained"
        onClick={() => createTodo()}
        disabled={task.length === 0}
      >
        Criar Todo
      </Button>
    </div>
  );
}
