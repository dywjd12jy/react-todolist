import React, { useState } from "react";
import "../style/TodoList.css";



function TodoList() { 
    console.log("1")

    // let tdInput = "가나다"
    const [ tdInput, setTdInput ] = useState("1");
    // 변수 = setState
    console.log("2")
    // console.log(tdInput);
            // 값,함수 

    function inputChange(event) {
        console.log("3")
        
        setTdInput(event.target.value)
        console.log("4")
        // tdInput = event.target.value
    }

    // console.log(tdInput);

    console.log("5")
    return (
        <>
            <div className="todoList-wrap">
                <input type= "text" onChange={ inputChange } value={ tdInput }></input>
                {/* <button onClick={this.addData.bind()}>추가</button> */}
            </div>
            <ul>
                <li>
                {tdInput}
                </li>
            </ul>
        </>
    );

    // 1. TodoList 시작
    // 2. useState는 tdInput(상태유지값) 과 setTdInput(값을 갱신하는 함수) 을 반환하여 초기값이 1로 찍혀나온다.
    // 3. console 3과 4는 출력되지 않는다.
    // 4. console.5 출력
    // 5. return() 안에 있는 태그들이 출력된다. >> 함수 실행을 종료하고 주어진 값을 함수호출 지점으로 이동한다. >> 주어진 값 :return 안에 태그들 >>렌더링
    // 6. input 태그에 변화가 생기면(onChange) inputChange(event)라는 함수가 발동한다.
    // 7. console.3 출력
    // 8. setTdInput 발동되어 event가 작동한 target의 value(값)가 setTdInput 에 저장된다.
    // 9. setTdInput에 의해 TdInput가 event.target.value로 갱신된다.
    // 10. console.4 출력
    // 11. TdInput의 갱신된 값이 input에 보인다. >> value={ tdInput }

}


export default TodoList;
