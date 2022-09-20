/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남우동 맛집', '리액트공부']);
  let[따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className='black_nav'>
        <h2 style={{color : 'red', fontSize : '36px'}}>ReactBlog</h2>
      </div>
      
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬
      </button>
      
      <div className='list'>
        <button onClick={()=>{ 
          let copy = [...글제목]; 
          copy[0] = '여자 코트 추천'; 
          글제목변경(copy);
        }}>눌러</button>
        <h4>{ 글제목[0] }<span onClick={ () => { 따봉변경(따봉 + 1) }}>👍</span>{ 따봉 }</h4>
        <p>9월 17일 발행</p>
      </div>
      
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>9월 17일 발행</p>
      </div>
      
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>9월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
