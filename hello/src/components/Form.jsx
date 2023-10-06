import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

function Form() {
    const {data,setData} = useContext(AppContext);

    function changeHandler(event){
        setData ((prevData)=>{
            return {
                ...prevData,
                [event.target.name] :event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
    }
  return (
    <>
    <form onSubmit={submitHandler}>
    <div class="form-group">
    <label for="fullname">Email address</label>
    <input type="name" class="form-control" name="fullname" value={data.fullname} onChange={changeHandler}/>
    <h2>{data.fullname}</h2>
    </div>

    <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" name="email" value={data.email} placeholder="name@example.com" onChange={changeHandler}/>
    <h2>{data.email}</h2>
    </div>

    <div class="form-group">
    <label for="address">Address</label>
    <input type="text" class="form-control" name="address" value={data.address} placeholder="1234 Main St" onChange={changeHandler}/>
    <h2>{data.address}</h2>
    </div>

    <div class="form-group">
    <label for="query">Query</label>
    <input type="text" class="form-control" name="query" value={data.query} onChange={changeHandler}/>
    <h2>{data.query}</h2>
    </div>

    <button
    onClick={()=>{
        setData((prevData)=>{
            return{
                ...prevData,
                state : data.state ? false : true 
            }
        })
    }
}
    >
        Submit
    </button>

    </form>

    {
        data.state ? (
            <div>
                <h2>Name : {data.fullname}</h2>
                <h2>Email : {data.email}</h2>
                <h2>Address : {data.address}</h2>
                <h2>Query : {data.query}</h2>
            </div>
        ) :
        (
            <div>
                <h2>No Data</h2>
            </div>
        )
    }
    </>
  )
}

export default Form