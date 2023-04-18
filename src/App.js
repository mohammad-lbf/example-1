import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Callus from './pages/Callus';
import Aboutus from './pages/Aboutus';
import PostDetailes from './pages/PostDetailes';
class App extends Component {
  render() {
    return (
      <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/callus' element={<Callus />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/Posts/:id' element={<PostDetailes />} />
          </Routes>
      </div>
    );
  }
}

export default App;