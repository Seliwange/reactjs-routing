import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <nav className="menu">
            <Link to="/reactjs-routing/">Home</Link>
            <Link to="/reactjs-routing/contacts">Contacts</Link>
            <Link to="/reactjs-routing/posts">Posts</Link>
            <Link to="/reactjs-routing/photos">Photos</Link>
        </nav>
    );
}