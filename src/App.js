/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남우동 맛집', '리액트공부']);
  
  let[따봉, 따봉변경] = useState([0, 0, 0]);

  let[modal, setModal] = useState(false);

  let[title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState('');

  let [삭제, 삭제누른값] = useState(0);

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
      
      {/* <div className='list' onClick={() => {
        setModal(!modal)
      }}>
        <button onClick={()=>{ 
          let copy = [...글제목]; 
          copy[0] = '여자 코트 추천'; 
          글제목변경(copy);
        }}>눌러
        </button>
        
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
      </div> */}

      {
        글제목.map(function (a, i) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i);}}>{ 글제목[i] }</h4>
              <span onClick={ () => { 
                let copy = [...따봉];
                copy[i] = copy[i] + 1 
                따봉변경(copy)
                }}>👍
              </span>{ 따봉[i] }
              <p>9월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                // copy.slice[i](삭제);
                copy.splice(i, 1);
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => { 입력값변경(e.target.value); console.log(입력값) }} />
      <button onClick={() => {
        let copy = [...글제목];
        // copy.push(입력값);
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글 발행</button>
      <Modal2></Modal2>

      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목} title={title}></Modal> : ''
      }

      
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천'
        props.글제목변경(copy)
      }}>글수정</button>
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'kim'
    };
  }
  render(){
    return (
      <div>안녕{this.state.name}
      <button onClick={() => {
        this.setState({name:'bok'})
      }}>버튼</button>
      </div>
    )
  }
}

export default App;
