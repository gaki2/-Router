import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'


function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      Contact is contact ...
    </div>
  )
}

let contents = [
  {id : 1, title : '유병각', content: '성공한다'},
  {id : 2, title : '유병각', content: '성공한 남자'},
  {id : 3, title : '유병각', content: '성공했다'},
];

function Topic() {
  let content_id = useParams().content_id;
  console.log(content_id);
  let content = 'no content';
  for (let i = 0; i < contents.length; i++) {
    if (Number(content_id) === contents[i].id) {
      content = contents[i].content;
      break ;
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
    lis.push(<li><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>);
  }
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {lis}
      </ul>
      <Route path='/topics/:content_id'><Topic></Topic></Route>
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
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/topics'><Topics></Topics></Route>
        <Route path='/contact'><Contact></Contact></Route>
        <Route path='/'>No page</Route>
      </Switch>
    </div>
  )
}




ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
