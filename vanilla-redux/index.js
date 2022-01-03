import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");
console.log(divToggle);
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return { ...state, toggle: !state.toggle };
    case INCREASE:
      return { ...state, counter: state.counter + action.difference };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  counter.innerText = state.counter;
};

render();
/*
subscribe : 파라미터로 전달 받은 함수는 액션이 발생하여 상태가 업데이트될 때마다 호출된다.  

리액트 프로젝트에서 리덕스를 사용할 때는 컴포넌트에서 리덕스 상태를 조회하는 과정에서 
react-redux 라이브러리가 subscribe함수의 작업을 대신해주므로 이 함수를 직접 사용하지 않는다.
*/
store.subscribe(render);

// divToggle.onClick = () => {
//   store.dispatch(toggleSwitch());
//   console.log("click toggle");
// };

divToggle.addEventListener("click", () => {
  store.dispatch(toggleSwitch());
  console.log("click toggle");
});
btnIncrease.addEventListener("click", () => {
  store.dispatch(increase(1));
  console.log("click increase");
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
  console.log("click decrease");
});
