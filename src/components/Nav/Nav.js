import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/photos">Photos</Link>
        </nav>
    );
}