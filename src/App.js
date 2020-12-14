import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Hoc from './components/Hoc';
import Post from './components/Post';
import Posts from './components/Pagination/Posts'
import  Upload from './components/FileUploadDownload/Upload'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>        
          <Route path="/hoc" component={Hoc}></Route>
          <Route path="/Posts" component={Posts}></Route>
          <Route path="/Upload" component={Upload}></Route>
          <Route path="/:post_id" component={Post}></Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
