import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import {AddTodo} from "./Components/AddTodo";
import React, {useState} from 'react'

function App() {

  const onDelete =(todo)=>{
    console.log("I am onDelete of: ", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo=(title, desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno= todos[todos.length-1].sno+1
    }
    const mytodo ={
      sno: sno,
      title:title,
      desciption:desc
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo)
  }

  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Learn SpringBoot",
      desciption:"Practice Springboot Rest "
    },
    {
      sno:2,
      title:"Learn SpringMVC",
      desciption:"Practice SpringMVC Java Based "
    },
    {
      sno:3,
      title:"Practice React JS",
      desciption:"Code using React, hooks, props and components"
    }
  ]);

  return (
    <>
    <Header title="To-do List" searchbar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
