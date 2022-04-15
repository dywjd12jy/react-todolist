import React, { useState } from "react";
import "../style/Complete.css";

function TodoList() { 
    //1.TodoList 시작
            // --console.log("1");

    const [ tdInput, setTdInput ] = useState("");
    //3. useState는 tdInput(상태유지값) 과 setTdInput(값을 갱신하는 함수) 을 반환하여 초기값이 ""로>빈공간으로 찍혀나온다.
            // --console.log("2");
    const [todos, setTodos] = useState([]);
    //5. useState는 todos(상태유지값) 과 useState(값을 갱신하는 함수) 를 반환하여 초기값이 []로> 배열로 찍혀나온다.
            // --console.log("3");

    function inputChange(event) {
        //7. input 태그에 텍스트를 입력하면 변화가 일어나며 이벤트함수가 발동된다.
            // console.log("4");
        
        setTdInput(event.target.value);
        //9. inputChange 이벤트가 일어난 타겟의 value를 setTdInput에 넣어준다.
        //10. tdInput에 값이 변경된다.?(덮어진다?)
            // --console.log("5");
    };
   
    function addTodoBtn(event) {
        //12. 추가 버튼을 클릭하면 addTodoBtn 이벤트함수가 발동된다.
            // --console.log("6");

            // 기존값을 들고 있다. 
        setTodos(todos => [...todos, tdInput]);
        //13. todos 를 펼치고 tdInput의 값고 같이 배열을 만들어준다.
            // --console.log("7");
        setTdInput("");
        //14. setTdInput의 값을 비워준다.
            // --console.log("8");
    };
            // console.log("9");

    function deleteTodoBtn(todo) {
        //15. deleteTodoBtn 버튼을 클릭하면 이벤트함수가 발동된다.
            // --console.log("10");

        const targetIndex = todos.findIndex(value => value === todo);
        //16. todos의 배열의 순서와 todo 배열의 순서가 일치하면 targetIndex에 값을 넣는다.
            // --console.log("11");

        const updatedTodos = [...todos]; 
        //17. todos를 펼쳐 배열로 묶어준다.
            // --console.log("12");

        updatedTodos.splice(targetIndex, 1);
        //18. updatedTodos 배열에서 targetIndex의 값에 표출된 순서의 요소를 한개 제거 한다.
            // --console.log("13");

        setTodos(updatedTodos);
        //19. updatedTodos값을 setTodos값에 넣어준다.
        //20. todos에 값이 적용
            // --console.log("14");
    };


    // 이동
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
        </>
    );

    //콘솔 찍히는 순서
    
    //1239 , 451239, 6781239, 10111213141239
    





}


export default TodoList;

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







    // const todos = ["코드깎는노인 구독하기", "제로초 구독하기", ["위구룬", "공부하기", "퇴근은없다"]];
    // const todos2 = todos;
    // todos2[0] = "코드깎는노인 구독 취소하기";
    
    // console.log(todos);
    // console.log("---------------------");
    // console.log(todos2);

    /// 룬 예상
    // todos = ["코드깎는노인 구독하기", "제로초 구독하기", ["위구룬", "공부하기", "퇴근은없다"]];
    // todos2 = ["코드깎는노인 구독 취소하기", "제로초 구독하기", ["위구룬", "공부하기", "퇴근은없다"]];
