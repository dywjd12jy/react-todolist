import React, { useState } from "react";
import "../style/TodoList.css";

// this.inputChange(e) {
//     this.props.onChange(e.target.value);
// }

function TodoList() {
    // const [TdInput, SetTdInput ] = useState();
    return (
        <>
            <div className="todoList-wrap">
                {/* <input type= "text" onChange={this.inputChange}></input> */}
                {/* <button onClick={this.addData.bind(this, id)}>추가</button> */}
            </div>
            <ul>
                <li></li>
            </ul>
        </>
    );
}


export default TodoList;
