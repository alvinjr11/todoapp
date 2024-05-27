npm -g install create-react-app first step in creating react[npm-node package manager]
npx create-react-app second step and always doing in execution[npx-node package executor]
npm start third step
spa -single page application
when we write html inside javascript file called jxx
jxx fullform javascript xml
rafce fullform  react arrow functional component expression
question:create a component called job it will have three different props salary,positin and company

```js
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";


function App() {
  let myname="alvin"
  let email="alvin@2001"
  let password="12345"
  
  let user=(
    <div>
      <h1>{myname}</h1>
    <h1>{email}</h1>
    <h1>{password}</h1>
    </div>
  )
  return (
    <div className="App">
      <Navbar/>
      <UserDetails name={myname} email={email} password={password}/>
    </div>
  );
}

export default App;
// ternery operator
function App(){

  let age=19
  let isGreen=true
  return(
    <div>

{age < 25?"underage":"overage"}
<h1 className={`${isGreen?"text-green-500":"text-red-500"}`}>this has color</h1>
{isGreen&&<button>hey it's green</button>}
    </div>
  )
}

// array
let user=["sarath","alvin","affan","lijo"]
  return(
    <div>
      {/* <h1>{user[1]}</h1>
      <h1>{user[3]}</h1> */}
      {user.map((item,index)=>{
        return(
  <div key={index}> 
    <h1>{item}</h1>
  </div>
        )
      })}
    </div>
  )
}
// objects
function App(){
  let user=[
    {name:"sarath",age:19},
    {name:"alvin",age:20},
    {name:"shin",age:19}
  ]
  return(
    <div>
      {/* <h1>{user[1]}</h1>
      <h1>{user[3]}</h1> */}
      {user.map((item,index)=>{
        return(
          <UserDetails name={item.name} age={item.age} key={index}/>
        )
      })}
    </div>
  )
}
// conter app
function App(){
   
    const [count, setCount] = useState(0)
let increment = (e) => {
    e.preventDefault()
  setCount(count + 1)
  if(count<10){
    setCount(count+1)
  }else(setCount(count))
}
let decrement=(e)=>{
    e.preventDefault()
  setCount(count - 1)
  if(count>1){
    setCount(count-1)
  }else{setCount(count)}
}
let reset=(e)=>{
    e.preventDefault()
    setCount(0)

}

    return(
        <div>
            <form>
                {/* <input type="text" placeholder="enter the task" className="text-black py-2 rounded-md"/>
                <button>Add Task</button> */}
                <div className="text-center">{count}</div>
               <div className="flex flex-col gap-10">
               <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
               </div>
            </form>
        </div>
    )
}
// input
const [input,setInput]=useState(" ")
  const grabInput=(e)=>{
    setInput(e.target.value)
  }
  return(
    <div className="w=full min-h-screen bg-black text-white">
      <input className="text-black" type="text" onChange={grabInput}/>
      <h1>{input}</h1>
    </div>
    // showtext
    function App(){
  const [showtext,setShowText]=useState(false)
  console.log(showtext)
  return(
    <div>
      <button onClick={()=>{setShowText(!showtext)}}>show/hide</button>
      <h1>{showtext ? "hey": ""}</h1>
    </div>
  )
}
// change color
import { useState } from "react"
function App(){
  const [color,setColor]=useState("purple")
return(
  <div>
    <button onClick={()=>{color==="purple"?setColor("cyan"):setColor("purple")}}>change color</button>
    <h1 style={{color:color}}>hey</h1>
  </div>
)
}



export default App


```
react hooks
useState()
useEffect()
useContext()
useRef()
usecallback()
useReducer()

components
a components is an independent reusable piece of code, they return html
their are class components and functional components
props
props is a special keyword in react that stands for properties it is used for passing datas from one component to another data with props are passed in a uni directional flow from parent to child

event:
an event is something that happens as response to something else


```js
import { useState } from "react"
import Todo from "./components/Todo"

function App(){
  const [todoList,setTodoList]=useState([])
  const [newTask,setNewTask]=useState("")

  const addTask=(e)=>{
   e.preventDefault()
   let task={
    id:todoList.length===0?1:todoList[todoList.length-1].id+1,
    taskName:newTask
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
  return(
    <div>
      <form>
        <input value={newTask} type="text" onChange={(e)=>{setNewTask(e.target.value)}} className="w-[400px] bg-gray-200 px-2 py-4 rounded-md "/>
        <button onClick={addTask} >Add task</button>
      </form>
      <div>
      {
        todoList.map((item, index) => {
          return(
          <Todo taskName={item.taskName} index={index} key={index} id={item.id} deleteTask={deleteTask} editTask={editTask}/>
          )
        })
      }
     </div>
    </div>
  )
}
export default App
```
crte  a component called course it will have three course name,fees,duration

note
Api(application programming interface)
api acts as a communication medium between two programers or system for functions
Json(javascript object notation)it a format for storring and transforming data, it is often used when data is send from server to webpages 
axios is an open source library to amke http request (get,post,put,delete)
