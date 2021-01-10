import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Hoc from './components/Hoc';
import Post from './components/Post';
import Posts from './components/Pagination/Posts'
import  Upload from './components/FileUploadDownload/Upload'
import LayoutTest from './components/LayoutTest';
import SignalR from './components/signalR/SignalR'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>        
          <Route exact path="/hoc" component={Hoc}></Route>
          <Route exact path="/Posts" component={Posts}></Route>
          <Route exact path="/Upload" component={Upload}></Route>
          <Route exact path="/Layout" component={LayoutTest}></Route>
          <Route exact path="/SignalR" component={SignalR}></Route>
          <Route exact path="/:post_id" component={Post}></Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
