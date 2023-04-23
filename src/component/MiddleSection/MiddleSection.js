import './MiddleSection.css';
import {
  GridOn,
  Slideshow,
  PeopleOutline,
  CheckCircle,
} from '@mui/icons-material';
import { Typography } from '@material-ui/core';

const MiddleSection = () => {
  return (
    <div className='middlesection-container'>
      <div>
        <GridOn fontSize='12px'></GridOn>
        <Typography
          style={{
            display: 'flex',
            fontSize: '15px',
          }}>
          POSTS{' '}
          <CheckCircle
            fontSize='12px'
            style={{
              alignSelf: 'center',
              marginLeft: '3px',
              color: '#00cc00',
            }}></CheckCircle>{' '}
        </Typography>
      </div>
      <div>
        <Slideshow fontSize='12px'></Slideshow>
        <Typography
          style={{
            display: 'flex',
            fontSize: '15px',
          }}>
          REELS{' '}
          <CheckCircle
            fontSize='12px'
            style={{
              alignSelf: 'center',
              marginLeft: '3px',
              color: '#00cc00',
            }}></CheckCircle>{' '}
        </Typography>
      </div>
      <div>
        <PeopleOutline fontSize='12px'></PeopleOutline>
        <Typography
          style={{
            display: 'flex',
            fontSize: '15px',
          }}>
          TAGGED{' '}
          <CheckCircle
            fontSize='12px'
            style={{
              alignSelf: 'center',
              marginLeft: '3px',
              color: '#00cc00',
            }}></CheckCircle>{' '}
        </Typography>
      </div>
    </div>
  );
};
export default MiddleSection;
