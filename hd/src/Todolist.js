import React, { useState } from 'react'
// import { Additem,Deleteitem,Removeitem } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import { Additem, Deleteitem, Removeitem } from './action/TodoAction';
import './Todo.css';




export default function Todolist(){

    const[input,setInput] = useState('');

    const list = useSelector((state)=>state.TodoReducer.list)

    const dis = useDispatch();

  return (
    <div className='main-div'>

        <h1 className='title'>Add Your List Here</h1>
        <div className='wraaper'>

        <div className='child-div'>
            <input type='text' className='input-field' placeholder='Add items'value={input} onChange={(e)=>{

               setInput(e.target.value);

               console.log(input);
            }}/>

            <button className='add-btn' onClick={()=>{
                dis(Additem(input),setInput(''));
            }}>ADD</button>

        </div>

        <div className='show'>

            {
                list.map((elm)=>{
                  return(
                    <div className='child' key={elm.id}>
                        <div>
                        <p className='more'>{elm.data}</p>
                        </div>
                    
                    <div className='cover-div'>
                <button className="delet-btn" onClick={()=>{
                    dis(Deleteitem(elm.id));
                }}>Delete</button>
               
                    </div>
                 </div>
                
                  )
                
                })
            }

        </div>

        <button className="reset-btn" onClick={()=>{
            dis(Removeitem())
        }}>Reset</button>

</div>

    </div>
  )
}
