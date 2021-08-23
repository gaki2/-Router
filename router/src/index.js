import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      home is home ...
    </div>
  )
}

let contents = [
  { id: 1, title: '유', content: '나는 성공한다' },
  { id: 2, title: '병', content: '나는 무조건 성공한다' },
  { id: 3, title: '각', content: '나는 천억장자가 된다' },
]

function Topic() {
  let id = useParams().id;
  let description = '존재하지 않는 글입니다.'
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(id)) {
      description = contents[i].content;
      break;
    }
  }
  return (
    <h1>{description}</h1>
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
        <Route exact path='/topics/:id'><Topic></Topic></Route>
      </ul>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      이름 : 병각 유
      번호 : 0104030719*
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          <Route path='/topics'><Topics></Topics></Route>
          <Route path='/contact'><Contact></Contact></Route>
          <Route path='/'><h1>존재하지 않는 페이지입니다.</h1></Route>
        </Switch>
      </ul>
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
