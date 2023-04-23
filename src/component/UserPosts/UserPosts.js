import axios from 'axios';
import './UserPosts.css';
import UserPost from '../UserPost/UserPost';
import { useState, useEffect, useRef } from 'react';
import { CircularProgress } from '@material-ui/core';

// https://source.unsplash.com/1600x900/?beach
// https://picsum.photos/v2/list?limit=10
// 'https://jsonplaceholder.typicode.com/photos'
const UserPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageNumber = useRef(0);
  const noOfPostPerRequest = 20;
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/photos'
        );
        setAllPosts(res.data);
        setPosts(
          res.data.slice(
            noOfPostPerRequest * pageNumber.current,
            noOfPostPerRequest * (pageNumber.current + 1)
          )
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    })();
  }, []);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      pageNumber.current = pageNumber.current + 1;
      const tempPost = [...allPosts].slice(
        noOfPostPerRequest * pageNumber.current,
        noOfPostPerRequest * (pageNumber.current + 1)
      );
      setPosts([...posts, ...tempPost]);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, [posts.length]);

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
