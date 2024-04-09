import { AppBar, TextField, Toolbar, Typography,Button ,Stack} from "@mui/material"
import { Container } from "@mui/system"
import TodoItem from "./components/TodoItem"
import { useState } from "react"
// import { Button } from "@mui/base"

const App = () => {
  const [title,setTitle] = useState<TodoItemType[]>([]);
  const [todos,setTodos] = useState<TodoItemType["title"]>([]);

  const completeHandler = (id:TodoItemType["id"]):void =>{
    const newTodos:TodoItemType = todos.map(i=>{
      if(i.id===id)i.isCompleted = !i.isCompleted
      return i;
    })
   setTodos(newTodos)
    
  }
  const deleteHandler = (id:TodoItemType["id"]):void =>{
    
    const newTodos:TodoItemType = todos.filter(i=>i.id!==id);
   setTodos(newTodos)
  }

  const editHandler = (id:TodoItemType["id"],newTitle:TodoItemType["title"]):void =>{
    const newTodos:TodoItemType = todos.map(i=>{
      if(i.id===id)i.title = !newTitle
      return i;
    })
   setTodos(newTodos)
    
  }

  const submitHandler = ():void=>{
    const newTodo:TodoItemType = {
      title,
      isCompleted:false,
      id:String(Math.random()*1000)
    }
    setTodos(prev=>([...prev,newTodo]))
    setTitle("")
  };

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
      todos.map((i)=> <TodoItem editHandler={editHandler} deleteHandler={deleteHandler} completeHandler={completeHandler} key={i.id} todo={i}/>)
    }
    </Stack>
    <TextField value={title} onChange={(e)=>setTitle(e.target.value)} fullWidth label={"New Task"} onKeyDown={(e)=>{
      if(e.key==="Enter" && title!=="") submitHandler();
    }} />
    <Button sx={{margin:"1rem 0"}} fullWidth variant={"contained"} onClick={submitHandler} disabled={title ===""}>ADD</Button>
   
  </Container>
}

export default App