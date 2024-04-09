import { AppBar, TextField, Toolbar, Typography, Button, Container, Stack } from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

type TodoItemType = {
  id: string;
  title: string;
  isCompleted: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [title, setTitle] = useState<string>("");

  const completeHandler = (id: string): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const deleteHandler = (id: string): void => {
    const newTodos: TodoItemType[] = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (id: string, newTitle: string): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const submitHandler = (): void => {
    if (title.trim() !== "") {
      const newTodo: TodoItemType = {
        title: title,
        isCompleted: false,
        id: String(Math.random() * 1000),
      };
      setTodos((prev) => [...prev, newTodo]);
      setTitle("");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height="73%" direction="column" spacing={1} p={1}>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
            editHandler={editHandler}
          />
        ))}
      </Stack>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label="New Task"
        onKeyDown={(e) => {
          if (e.key === "Enter" && title.trim() !== "") submitHandler();
        }}
      />
      <Button
        sx={{ margin: "1rem 0" }}
        fullWidth
        variant="contained"
        onClick={submitHandler}
        disabled={title.trim() === ""}
      >
        ADD
      </Button>
    </Container>
  );
};

export default App;
