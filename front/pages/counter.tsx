import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import counterSlice from '../ducks/counter/slice';
import { useCounterState } from '../ducks/counter/selectors';
import { asyncDecrementCounter, asyncIncrementCounter } from '../ducks/counter/asyncActions';


const StyledMessage = styled.p`
  color: red;
  font-weight: bold;
`;

const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  }

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  }

  const onClickAsyncIncrement = async () => {
    await dispatch(asyncIncrementCounter(10))
  }

  const onClickAsyncDecrement = async () => {
    await dispatch(asyncDecrementCounter(10))
  }

  return (
    <>
      <button type='button' onClick={onClickIncrement}>
        増やす
      </button>
      <button type='button' onClick={onClickDecrement}>
        減らす
      </button>
      <button 
      type='button'
      onClick={onClickAsyncIncrement}
      disabled={state.loading}
      >
        非同期で増やす
      </button>
      <button
      type='button'
      onClick={onClickAsyncDecrement}
      disabled={state.loading}
      >
        非同期で減らす
      </button>
      <p>ねこが{state.count}匹いる</p>
      { state.loading ? <p>通信中</p> : '' }
      { state.error ? (
        <StyledMessage>問題が発生しました{ state.errorMessage }</StyledMessage>
      ) : ''}
    </>
  )

}

export default CounterPage;