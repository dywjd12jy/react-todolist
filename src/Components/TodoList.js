import React, { useState } from "react";
import "../style/Complete.css"

function TodoList() { 
    console.log("1")

    const [ tdInput, setTdInput ] = useState("");
    console.log("2");
    const [todos, setTodos] = useState([]);
    console.log("3");

    function inputChange(event) {
        console.log("4");
        
        setTdInput(event.target.value);
        console.log("5");
    }
   
    function addTodoBtn(event) {
        console.log("6")
        // 기존값을 들고 있다. 
        setTodos(todos => [...todos, tdInput]);
        console.log("7");
        setTdInput("");
        console.log("8");
    }
    console.log("9");

    function deleteTodoBtn(todo) {
        console.log("10");

        const targetIndex = todos.findIndex(value => value === todo);
        console.log("11");

        const updatedTodos = [...todos]; 
        console.log("12");
        updatedTodos.splice(targetIndex, 1);
        console.log("13");
        setTodos(updatedTodos);
        console.log("14");
    }

    // const todoComplete = querySelector("#todoCompleteId");
    // console.log("15");

    // function moveCompleteBtn(todo) {
    //     console.log("16");
    //     todoComplete = [...todos];
    //     console.log("17");
    // }
    // console.log("18");
    


    return (
        <>
            <div className="todoList-wrap">
                <input type= "text" onChange={ inputChange } value={ tdInput }></input>
                <button onClick={ addTodoBtn }>추가</button>
            </div>
            <ul>
                {
                    todos.map( 
                        todo => 
                        <li key={ todo }> 
                            <p> {todo} </p>
                            {/* <button onClick={ () => moveCompleteBtn(todo) }>Complete</button> */}
                            <span>
                                <button onClick={ () => deleteTodoBtn(todo) } >Delete</button>
                            </span>
                        </li>
                    )
                }
                <li>
                    <p>adfasdfasdf</p>
                    <span>
                        <button>Delete</button>
                    </span>
                </li>
            </ul>
            {/* <ul id="todoCompleteId" className="todoComplete">

            </ul> */}
        </>
    );


    // const todos = ["코드깎는노인 구독하기", "제로초 구독하기", ["위구룬", "공부하기", "퇴근은없다"]];
    // const todos2 = todos;
    // todos2[0] = "코드깎는노인 구독 취소하기";
    
    // console.log(todos);
    // console.log("---------------------");
    // console.log(todos2);

    /// 룬 예상
    // todos = ["코드깎는노인 구독하기", "제로초 구독하기", ["위구룬", "공부하기", "퇴근은없다"]];
    // todos2 = ["코드깎는노인 구독 취소하기", "제로초 구독하기", ["위구룬", "공부하기", "퇴근은없다"]];




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


    // onClick 을 넣은 후 
    // 1. TodoList 시작 console.1
    // 2. useState는 tdInput(상태유지값) 과 setTdInput(값을 갱신하는 함수) 을 반환하여 초기값이 1로 찍혀나온다. console.2
    // 3. useState는 todos(상태유지값) 과 setTodos(값을 갱신하는 함수) 을 반환하여 초기값이 배열로 찍혀나온다. console.3
    // 4. console.4,5,6,7,8 은 출력되지 않는다.
    // 5. console.9
    // 6. return() 안에 있는 태그들이 출력된다.
    // 7. input 텍스트 입력 시 inputChange 이벤트 발동 setTdInput의 값이 변동된다.( console.4,5 출력 후 console.1239 , 678 은 출력되지 않음 )
    // 8. 추가 버튼 클릭시 console.6 출력
    // 9. setTodos 발동 하여 tdInput 의 값을 todos 에 복제 해준다. 
    // 10. console.7 출력
    // 11. setTdInput 의 값을 null 시켜준다.
    // 12. console.8, 9 출력
    // 13. return() 안에 있는 태그들이 재렌더링 된다.
    // 14. 

    // todos 에 tdInput을 넣은걸 setTodos 함수를 이용해 todos를 할당했다.
        // 1. todo 값 과 같은 값을 가지는 값을 todos에서 찾는다.
        // 2. 찾은 값을 todos 에서 제거한다.
        // 3. 해당 항목을 제거한 todos 를 반영시킨다.
}


export default TodoList;
