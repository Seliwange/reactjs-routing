import './Posts.css';
import Post from '../Post/Post';
import POSTS_DATA from './Data';

export default function Posts(){

    return (
        <>
            <div className="posts">
                {
                POSTS_DATA.map((post) => {
                    return <Post 
                    author={post.author}
                    content={post.content}
                    image={post.image}
                    date={post.date}
                    />
                })
                }
            </div>
        </>
    );
}