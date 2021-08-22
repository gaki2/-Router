import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      home is ...
    </div>
  )
}

let contents = [
  { id : 1, title: '오늘의 명언', description: '실패도 습관이다'},
  { id : 2, title: '코로나 바이러스 확진자 수', description: '한국 : 1600 명'},
  { id : 3, title: '어떻게 성공 할 것인가?', description: '생생하게 꿈꿔라' },
]

function Topics() {
  let topics = [];
  let routers = [];
  for (let i = 0; i < contents.length; i++) {
    topics.push(<li><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>)
  }
  for (let i = 0; i < contents.length; i++) {
    routers.push(<Route path={`/topics/${contents[i].id}`}>{contents[i].description}</Route>)
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics}
      </ul>
        {routers}
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact is ...
    </div>
  )
}

function NotFound() {
  return (
    <div>
      <h2>이 페이지는 존재하지 않습니다.</h2>
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
      </ul>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/topics'><Topics></Topics></Route>
        <Route path='/contact'><Contact></Contact></Route>
        <Route path='/'><NotFound></NotFound></Route>
      </Switch>
    </div>
  )
}


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
