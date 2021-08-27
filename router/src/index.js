import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'

let contents = [
  {id : 1, title : '강민지' , content: '민지 ㅎ'},
  {id : 2, title: '소소소', content: '모모모'},
  {id : 3, title: '키키키' , content: '카카카'},
]

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li><NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink></li>)
  }

  let routers = [];
  for (let i = 0; i < contents.length; i++) {
    routers.push(<Route path={`/topics/${contents[i].id}`}>{contents[i].content}</Route>)
  }
  return (
    <div>
       <ul>
        {lis}
      </ul>
      {routers}
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

function App () {
  return (
    <div>
      <h1>React Router DOM example ...</h1>
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
      </ul>
      <Switch>
      <Route exact path='/'><Home></Home></Route>
      <Route path='/contact'><Contact></Contact></Route>
      <Route path='/topics'><Topics></Topics></Route>
      <Route path='/'><h1>No page</h1></Route>
      </Switch>
    </div>
  )
}



ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
