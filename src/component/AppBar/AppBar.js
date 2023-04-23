import './AppBar.css';
import TextField from '../TextField/TextField';
import { Button, Divider } from '@material-ui/core/';

const AppBar = ({handleLogin}) => {
  return (
    <>
    <div className='appbar-container'>
      <div className='appbar-content'>
        <div className='logo'>Instagram</div>
        <TextField />
        <div style={{ display: 'flex' }}>
          <Button
            variant='contained'
            style={{
              textTransform: 'capitalize',
              backgroundColor: '#4d94ff',
              color: '#ffffff',
              borderRadius: '7px',
              marginRight: '20px',
            }}
            onClick={() => handleLogin()}>
            Log In
          </Button>
          <Button
            variant='outlined'
            style={{
              textTransform: 'capitalize',
              color: '#4d94ff',
              border: 'solid 2px #4d94ff',
              borderRadius: '7px',
            }}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
    <hr/>
    </>
  );
};
export default AppBar;
