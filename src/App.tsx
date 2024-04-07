import { AppBar, TextField, Toolbar, Typography,Button ,Stack} from "@mui/material"
import { Container } from "@mui/system"
import TodoItem from "./components/TodoItem"
import { useState } from "react"
// import { Button } from "@mui/base"

const App = () => {
  const [todos,setTodos] = useState<TodoItemType[]>([
    {
      title:"hey",
      isCompleted:false,
      id:"s"
    },
    {
      title:"hello",
      isCompleted:false,
      id:"os"
    },
  ]);

  const completeHandler = (id:TodoItemType["id"]):void =>{
    alert(id)
  }
  const deleteHandler = (id:TodoItemType["id"]):void =>{
    alert(id)
  }

  return <Container maxWidth="sm" sx={{height:"100vh"}}>
    <AppBar position="static">
      <Toolbar>
        <Typography>
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
    <Stack height={"73%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
    {
      todos.map((i)=> <TodoItem deleteHandler={deleteHandler} completeHandler={completeHandler} key={i.id} todo={i}/>)
    }
    </Stack>
    <TextField fullWidth label={"New Task"} />
    <Button sx={{margin:"1rem 0"}} fullWidth variant={"contained"}>ADD</Button>
   
  </Container>
}

export default App