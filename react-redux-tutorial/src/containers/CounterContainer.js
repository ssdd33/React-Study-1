import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

function CounterContainer({ number, increase, decrease }) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}
/*
위 컴포넌트를 리덕스와 연동하려면  react-redux에서 제공하는 connect 함수를 사용해야 한다.
이 함수는 다음과 같이 사용한다.
 
connect(mapStateToProps,mapDispatchToProps)(연동할 컴포넌트)

mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수 

이렇게 connect함수를 호출하고 나면 또 다른 함수를 반환한다. 
반환된 함수에 컴포넌트를 파라미터로 넣어 주면 리덕스와 연동된 컴포넌트가 만들어진다.
*/
const mapStateToProps = (state) => ({ number: state.counter.number });
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
