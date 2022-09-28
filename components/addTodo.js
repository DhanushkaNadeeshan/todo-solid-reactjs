import { useRef } from "react";
import Image from 'next/image';
// form controller is out off methodes
export default function AddTodo({ addTodoList }) {

    const inputUseRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = inputUseRef.current.value;
        if (newTask) {
            addTodoList(newTask);
            inputUseRef.current.value = "";
        }
    }

    return (
        <div className="main">
    
            <Image src='/to-do-list.png' width={96} height={96}/>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" ref={inputUseRef} className="input"></input>
                <button type="submit" className="button">Add</button>
            </form>
        </div>)
}