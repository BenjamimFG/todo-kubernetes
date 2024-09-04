import { Button, TextField } from "@mui/material";
import { Component, ReactNode } from "react";

import styles from "../styles/TodoForm.module.css";
import ApiService from "../services/api.service";

export default class TodoForm extends Component {
  state = {
    task: "",
  };

  async createTodo() {
    if (this.state.task.length === 0) return;

    try {
      await ApiService.createTodo(this.state.task);

      this.setState({ task: "" });

      // carregar todos
    } catch (e) {
      alert("Erro ao criar Todo");
      console.log("Erro ao criar Todo");
    }
  }

  render(): ReactNode {
    return (
      <div className={styles["form-container"]}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          className={styles["task-input"]}
          value={this.state.task}
          onChange={(e) => this.setState({ task: e.target.value })}
        />
        <Button
          variant="contained"
          onClick={() => this.createTodo()}
          disabled={this.state.task.length === 0}
        >
          Criar Todo
        </Button>
      </div>
    );
  }
}
