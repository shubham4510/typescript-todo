import { Checkbox, Paper, Typography, Button } from "@mui/material";
import Stack from "@mui/system/Stack"; // Import Stack correctly

type PropsType = {
  todo: TodoItemType;
  deleteHandler: (id: TodoItemType["id"]) => void;
  completeHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({ todo, deleteHandler, completeHandler }: PropsType) => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction="row" alignItems="center">
        <Typography marginRight="auto">{todo.title}</Typography>
        <Checkbox />
        <Button onClick={() => completeHandler(todo.id)}>Edit</Button>
        <Button onClick={() => deleteHandler(todo.id)}>🗑️</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
