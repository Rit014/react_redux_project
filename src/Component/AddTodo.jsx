import React, { useState } from 'react';

import './style.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';

const AddTodo = () => {

  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list)
  const dispatch = useDispatch();

  return (

    <>
      <div className="container">
        <h1 className="text-white mb-5 py-5">AddTODO APP</h1>
        <div className="inner-container">
          <div className="items">
            <input type="text" placeholder="enter todo"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <p className='icon' onClick={() => dispatch(addTodo(inputData),
              setInputData(''))}><i class="fa-solid fa-plus"></i></p>
          </div>

          {/* Items  */}

          {
            list.map((ele) => {
              return (
                <div className="addItem" key={ele.id}>
                  <p>{ele.data}</p>
                  <p id='icon' onClick={() => dispatch(deleteTodo(ele.id))}><i class="fa-solid fa-trash"></i></p>
                </div>
              )
            })
          }

          {/* Remove Item */}

          <div className="removeItem">
            <button className='btn btn-success border-2'
            onClick={() => dispatch(removeTodo())}
            >
            Remove List
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo
