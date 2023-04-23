import './UserSection.css';
import { Button } from '@material-ui/core';
import {
  Verified,
  PersonAddAlt,
  MoreHoriz,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserSection = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get(
          'https://jsonplaceholder.typicode.com/users/1'
        );
        setUserData(user.data);
        console.log(userData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
    return () => {};
  }, []);

  return (
    <div className='usersection-container'>
      <div className='user-image'>
        <img src='https://source.unsplash.com/1600x900/?nature' />
      </div>
      <div className='user-content'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <h3 style={{ marginRight: '30px', display: 'flex' }}>
            {userData.username}
            <Verified
              style={{
                color: '#4d94ff',
                marginLeft: '5px',
              }}></Verified>
          </h3>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#4d94ff',
              color: '#ffffff',
              margin: '5px',
              padding: '2px 5px',
              textTransform: 'capitalize',
            }}>
            follow
          </Button>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#4d94ff',
              color: '#ffffff',
              margin: '5px',
              padding: '2px 5px',
              textTransform: 'capitalize',
            }}>
            message
          </Button>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#cccccc',
              margin: '5px',
              padding: '2px 0px',
              minWidth: '30px',
            }}>
            <PersonAddAlt
              style={{ padding: '2px' }}></PersonAddAlt>
          </Button>
          <MoreHoriz></MoreHoriz>
        </div>
        {userData.address && (
          <h5>
            address :
            {`${userData.address.street}, ${userData.address.city}, ${userData.address.zipcode}`}
          </h5>
        )}
        <h5>phone: {userData.phone}</h5>
        <h5>email : {userData.email}</h5>
      </div>
    </div>
  );
};
export default UserSection;
