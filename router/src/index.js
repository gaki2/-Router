import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch, useParams } from 'react-router-dom';
import './index.css'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Here is home. :l
    </div>
  )
}

let contents = [
  {id : 1, title : 'HTML', description: 'HTML is ...'},
  {id : 2, title : 'CSS', description: 'CSS is ...'},
  {id : 3, title : 'JS', description: 'JS is ...'},
]

function Topic() {
  const params = useParams();
  const id = params.topic_id;
  let selected_topic = {
    title : 'sorry',
    description : 'page not found',
  }
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(id)) {
      selected_topic = contents[i];
      break ;
    }
  }
  return (
    <div>
      <h2>{selected_topic.title}</h2>
      {selected_topic.description}
    </div>
  )
}

function Topics() {
  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li><Link to={`/topics/${contents[i].id}`}>{contents[i].title}</Link></li>)
  }
  return (
    <div>
      <ul>
        {lis}
      </ul>
      <Route path='/topics/:topic_id'><Topic></Topic></Route>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <Switch>
      <Route exact path='/'><Home></Home></Route>
      <Route path='/topics'><Topics></Topics></Route>
      <Route path='/contact'><Contact></Contact></Route>
      <Route path='/'>page not found</Route>
      </Switch>
    </div>
  )
}


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
