import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'

let contents = [
  { id: 1, title: '민지', content: '병각' },
  { id: 2, title: '강지', content: '밍지' },
  { id: 3, title: '민강지', content: '민지' },
]

function Topic() {
  let id = useParams().id;
  let content = '글이 없습니다.'
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(id)) {
      content = contents[i].content;
      break;
    }
  }
  return (
    <div>
      <h1>{content}</h1>
    </div>
  )
}

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>);
  }
  return (
    <div>
      <ul>
        {lis}
      </ul>
      <Route path='/topics/:id'><Topic></Topic></Route>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      Contact is Contact ...
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
      <h1>React Router DOM example</h1>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink exact to='/contact'>Contact</NavLink></li>
        <li><NavLink exact to='/topics'>Topics</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/contact'><Contact></Contact></Route>
        <Route path='/topics'><Topics></Topics></Route>
        <Route path='/'>No page</Route>
      </Switch>
    </div>
  )
}



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
