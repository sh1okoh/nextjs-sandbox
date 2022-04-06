import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import counterSlice from '../ducks/counter/slice';
import { useCounterState } from '../ducks/counter/selectors';

const CounterPage: React.FC = () => {
  const dispatch = useDispatch();
  const state = useCounterState().counter;

  const onClickIncrement = () => {
    dispatch(counterSlice.actions.incrementCounter(1));
  }

  const onClickDecrement = () => {
    dispatch(counterSlice.actions.decrementCounter(1));
  }

  return (
    <>
      <button type='button' onClick={onClickIncrement}>
        増やす
      </button>
      <button type='button' onClick={onClickDecrement}>
        減らす
      </button>
      <p>ねこが{state.count}匹いる</p>
    </>
  )

}

export default CounterPage;