import { useState,useEffect } from "react"
import Todo from "./components/Todo"

const localData=()=>{
let list=localStorage.getItem("data")
if(list){
  return JSON.parse(list)
}else{
  return[]
}
}

function App(){
  const [todoList,setTodoList]=useState(localData())
  const [newTask,setNewTask]=useState("")

  const addTask=(e)=>{
   e.preventDefault()
   let task={
    id:todoList.length===0?1:todoList[todoList.length-1].id+1,
    taskName:newTask,
    completed:false
   }
 if(!newTask){
  alert("enter some task")
 }else{
  let newTodoList=[...todoList,task]
  setTodoList(newTodoList)
  setNewTask("")
 }


}
const deleteTask=(id)=>{
  let newTodoList=todoList.filter((item)=>{
    return item.id!==id
  })
  setTodoList(newTodoList)

}
const editTask=(id)=>{
  let changeTask=todoList.find((item)=>{
    return item.id===id
  })
let newTodoList=todoList.filter((item)=>{
  return item.id!==id
})
  setNewTask(changeTask.taskName)
  setTodoList(newTodoList)
}
const isComplete=(id)=>{
 setTodoList(
  todoList.map((item)=>{
    if(item.id===id){
      return{...item,completed:true}
    }else{
      return item
    }
  })
 )

}
useEffect(()=>{
localStorage.setItem("data",JSON.stringify(todoList))
},[todoList])


  return(
    <div className="bg-black text-white min-h-screen">
      <form>
        <input value={newTask} type="text" onChange={(e)=>{setNewTask(e.target.value)}} className="text-black w-[400px] bg-gray-200 px-2 py-4 rounded-md "/>
        <button onClick={addTask} >Add task</button>
      </form>
      <div>
      {
        todoList.map((item, index) => {
          return(
          <Todo taskName={item.taskName} index={index} key={index} id={item.id} deleteTask={deleteTask} editTask={editTask} isComplete={isComplete} completed={item.completed}/>
          )
        })
      }
     </div>
    </div>
  )
}
export default App
