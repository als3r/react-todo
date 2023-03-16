import { useRef, useState } from "react";
import ToDoList from "./ToDoList";

function ToDo() {

    let storedToDoData = [];
    if(localStorage.getItem('toDoData') !== null && localStorage.getItem('toDoData') !== undefined){
        storedToDoData = JSON.parse(localStorage.getItem('toDoData'));
    }    
    let storedToDolastId = 0;
    if(localStorage.getItem('toDoLastId') !== null && localStorage.getItem('toDoLastId') !== undefined){
        storedToDolastId = parseInt(localStorage.getItem('toDoLastId'));
    }    

    let [toDoData, setToDoData] = useState(storedToDoData);
    let [toDoLastId, setToDoLastId] = useState(storedToDolastId);
    let [toDoInput, setToDoInput] = useState('');
    let [toDoHiddenIdInput, setToDoHiddenIdInput] = useState('');
    
    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    
        return [ htmlElRef, setFocus ] 
    }
    const [toDoInputRef, setInputFocus] = useFocus();

    const handleSubmitToDoListForm = event => {
        event.preventDefault();
        if(toDoInput.length < 4){
            return false;
        }

        let isUpdate = false;
        if(toDoHiddenIdInput !== '' && parseInt(toDoHiddenIdInput) >= 0){   
            isUpdate  = true;
        }

        if(isUpdate){
            const editedId = parseInt(toDoHiddenIdInput);
            toDoData.map((item) => {
                if(item.id === editedId){
                    return item.description = toDoInput;
                }
            })
            saveToDoData(toDoData);

        } else {
            const newToDo = {
                "id": toDoLastId+1, "description": toDoInput, "status": false
            };
            console.log(newToDo);
            toDoData.push(newToDo);
            saveToDoData(toDoData);
            setToDoLastId(toDoLastId+1);
            localStorage.setItem('toDoLastId', parseInt(toDoLastId+1));
        }

        setToDoInput('');
        setToDoHiddenIdInput('');
    };

    const handleToDoStatusChange = event => {
        const isChecked = event.target.checked;
        const itemId = parseInt(event.target.getAttribute("data-id"));

        toDoData.map((item) => {
            if(item.id === itemId){
                return item.status = isChecked;
            }
        })
        saveToDoData(toDoData);
    };

    const handleToDoDescriptionChange = event => {
        const itemId = parseInt(event.target.getAttribute("data-id"));
        const description = event.target.value;
        
        toDoData.map((item) => {
            if(item.id === itemId){
                console.log(item.description)
                return item.description = description;
            }
        })
        saveToDoData(toDoData);
    };

    const handleRemoveToDo = event => {
        const id = parseInt(event.target.getAttribute("data-id"));
        let toDoDataArr = toDoData.filter(item => item.id !== id);
        console.log(id);
        console.log(toDoDataArr);
        saveToDoData(toDoDataArr);
    };

    function saveToDoData(arr){
        setToDoData(arr);
        localStorage.setItem('toDoData', JSON.stringify(arr));
    };

    const handleToDoInputChange = event => {
        setToDoInput(event.target.value);
    };

    return (
        <div className="todolist__container">
            <h4 className="todolist__header">To do or not to do</h4>
            <form action="/" className="todolist__form" onSubmit={handleSubmitToDoListForm}>
                <input type="text" ref={toDoInputRef} 
                    className="todolist__input" placeholder="Enter todo here ..." 
                    value={toDoInput} onChange={handleToDoInputChange}
                />
                <input type="hidden" value={toDoHiddenIdInput} />
                <button className="todolist__add" onClick={handleSubmitToDoListForm}>Add</button>
            </form>
            <ToDoList 
                toDoData={toDoData} 
                handleToDoStatusChange={handleToDoStatusChange} 
                handleToDoDescriptionChange={handleToDoDescriptionChange}
                handleRemoveToDo={handleRemoveToDo} 
            />
        </div>
    );
}

export default ToDo;