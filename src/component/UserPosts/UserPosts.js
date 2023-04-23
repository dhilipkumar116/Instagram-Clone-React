import axios from 'axios';
import './UserPosts.css';
import UserPost from '../UserPost/UserPost';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

// https://source.unsplash.com/1600x900/?beach
// https://picsum.photos/v2/list?limit=10
// 'https://jsonplaceholder.typicode.com/photos'
const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        setPosts(res.data.slice(0, 50));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className='userpost-container'>
      {loading ? (
        <CircularProgress className='loadingbar' />
      ) : (
        posts.map((post) => (
          <UserPost key={post.id} post={post} />
        ))
      )}
    </div>
  );
};

export default UserPosts;
