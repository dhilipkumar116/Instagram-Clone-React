import './UserPost.css'

const UserPost = ({post}) => {
    return <div className='image-container'><img src={post.url}></img></div>
}
export default UserPost