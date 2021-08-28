import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'

let contents = [
  {id : 1, title: '민지', content: '병각'},
  {id : 2, title: '민지', content: '나를 좋아함'},
  {id : 3, title: '강민지', content: '민지밖에없음.'},
]

function Topic() {
  let id = useParams().content_id;
  let content;
  for(let i = 0; i < contents.length; i++) {
    if (Number(id) === contents[i].id) {
      content = contents[i].content;
      break ;
    }
  }
  return(
    <div>
      <h3>{content}</h3>
    </div>
  )
}


function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>)
  }
  return(
    <div>
      <ul>
        {lis}
      </ul>
      <Route path='/topics/:content_id'><Topic></Topic></Route>
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
      <h1>React Router DOM</h1>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
      </ul>
      <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route  path='/contact'><Contact></Contact></Route>
        <Route  path='/topics'><Topics></Topics></Route>
        <Route path='/'>No page</Route>
      </Switch>
      
    </div>
  )
}



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
