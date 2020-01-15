import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/Pages/News/News';
import Teams from './components/Pages/Teams/Teams';
import Players from './components/Pages/Players/Players';

function App() {
  return (
    <BrowserRouter>

      <main className='layout'>
        <Sidebar />
        <Route path='/' render= { () => <h2>Home Page</h2>} exact/>
        <Route path='/news' component={News} />
        <Route path='/teams' component={Teams} />
        <Route path='/players' component={Players} />
      </main>

    </BrowserRouter>
  );
}

export default App;