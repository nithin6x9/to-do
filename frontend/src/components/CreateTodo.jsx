export function CreateTodo(){
    return <div>
    <input style = {{
        padding:10,
        margin:10,
    }} type = "text" placeholder = "title"></input><br></br>
    <input style = {{
        padding:10,
        margin:10,
    }} type = "text" placeholder = "Description"></input><br></br>
    

    <button style = {{
        padding:10,
        margin:10,
    }} onClick={()=>{
        fetch("http://localhost:5173/todos"),{
            method:"POST",
            body:JSON.stringify({
                title:""
            })
        }
            .then(async function(res){
                const json = await
            })
    }}>Add a ToDo</button>
    </div>
}