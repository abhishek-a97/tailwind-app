import './App.css';
import Header from './components/layouts/Header';
import Login from './components/pages/Login';
import Cards from './components/widgets/Cards';
import Forms from './components/widgets/Forms';
import Models from './components/widgets/Models';
import Tables from './components/widgets/Tables';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Parents from './components/widgets/MUI/Parents';

function App() {
  return (
    <div className='m-5 '>
      {/* <Tables/> */}

      <Router>
        <Header/>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/' component={Tables}/>
          <Route exact path='/form' component={Forms}/>
          <Route exact path='/card' component={Cards}/>
          <Route exact path='/model' component={Models}/>
          <Route exact path='/parent' component={Parents}/>
        </Switch>
      </Router>
      {/* <Forms/> */}
      {/* <Cards/> */}
      {/* <Models/> */}
      {/* <Login/> */}
      
      {/* <div className='columns-1'>
        <div className='columns-2 bg-slate-400'>
          <div className='ml-1'>

          <Tables/>
          </div>
          <div>

          <Tables/>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
