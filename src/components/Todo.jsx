import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
const Todo = ({taskName,index,deleteTask,id,editTask,isComplete,completed}) => {
  return (
    <div className='flex gap-10 ' >
    <h1 className={`${completed?"line-through text-green-500":"text-blue-300 hover:text-blue-700"}`}>{index+1},{taskName}</h1>
    <DoneIcon onClick={()=>{isComplete(id)}} className='text-green-500 hover:text-green-700'/>
    <EditIcon onClick={()=>{editTask(id)}} className='text-blue-500'/>
    <DeleteIcon onClick={()=>{deleteTask(id)}} className='text-red-500'/>
    
  </div>
  )
}

export default Todo