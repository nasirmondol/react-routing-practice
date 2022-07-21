import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog';
import Blogs from './component/Blogs/Blogs';
import Contact from './component/Contact/Contact';
import Error from './component/Error';
import Header from './component/Header';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/:title' element={<Blog/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
