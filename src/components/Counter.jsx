import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'

export default function Counter({total, onClick}) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // 의존성 배열에 count 변수를 추가하여 count 값이 업데이트될 때마다 실행됩니다.
    console.log('count updated:', count);
  }, [count]);

  const handleClick = () => {
    // count 상태 값을 업데이트합니다.
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );



  // const [count, setCount] = useState(0);
  // return (
  //   <>
  //     <div>{count} <span>/ {total} </span>여기 클릭</div>
  //     <button onClick={() => {setCount(
  //       (prev) => prev + 1)
  //       onClick();}}> Add+ </button>
  //   </>

  // );
};