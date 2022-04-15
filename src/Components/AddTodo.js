import React, {useState} from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
       else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
       }
    }

    return (
        <div className="container">
        <h4>Add any To-Do Item</h4>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">To-Do Title</label>
                    <input type="text" class="form-control" id="title" value={title} 
                    onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" />
                    </div>
                <div className="form-group">
                    <label htmlFor="desc">To-Do Description</label>
                    <input type="text" class="form-control" id="desc" value={desc}
                    onChange={(e)=>{setDesc(e.target.value)}}
                     placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add To-Do</button>
            </form>
        </div>
    )
}
