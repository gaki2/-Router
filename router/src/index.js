import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'


let contents = [
  {id : 1, title : '유병각의 성공신화', content: '훈남 천억장자 유병각 그의 행보는?'},
  {id : 2, title : '천억장자 유병각 그에 대해 알아보자', content: '고려대학교 졸업'},
  {id : 3, title : '유병각의 일대기', content: '저서 : 성공하는 방법'}
]


function Topic() {
  let topic_id = useParams().topic_id;
  let content = 'No content';
  for (let i = 0; i < contents.length; i++) {
    if (Number(topic_id) === contents[i].id) {
      content = contents[i].content;
      break;
    }
  }
  return (
    <div>
      <h3>{content}</h3>
    </div>
  )
}

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink exact to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>);
  }

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {lis}
      </ul>
      <Route exact path='/topics/:topic_id'><Topic></Topic></Route>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      Contact is contact ...
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      Home is home ...
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>React Router DOM Example</h1>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink exact to='/topics'>Topics</NavLink></li>
        <li><NavLink exact to='/contact'>Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/contact'><Contact></Contact></Route>
        <Route path='/topics'><Topics></Topics></Route>
        <Route path='/'>No Page</Route>
      </Switch>
    </div>

  )
}



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
