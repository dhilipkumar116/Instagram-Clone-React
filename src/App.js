import './App.css';
import AppBar from './component/AppBar/AppBar';
import UserSection from './component/UserSection/UserSection';
import UserPosts from './component/UserPosts/UserPosts';
import MiddleSection from './component/MiddleSection/MiddleSection';
import { Divider } from '@material-ui/core';
import { useState } from 'react';
import SideBar from './component/SideBar/SideBar';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [hiddenClass, setHiddenClass] = useState('');
  const handleLogin = () => {
    setIsLogin(!isLogin);
    if (isLogin) {
      setHiddenClass('logedin');
    } else {
      setHiddenClass('');
    }
    console.log(hiddenClass);
  };
  return (
    <div className='container'>
      <AppBar handleLogin={handleLogin} />
      <div className='main-content'>
        <div className='main-content-sidebar'>
          <SideBar/>
          <hr style={{width:"1px"}}/>
        </div>
        <div className='main-content-user'>
          <div style={{ width: '80%'}}>
            <UserSection />
            <Divider
              variant='medium'
              style={{ margin: '5px 0' }}></Divider>
            <MiddleSection />
            <UserPosts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
