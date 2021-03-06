import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import Posts from '../Posts/Posts';
import Photos from '../Photos/Photos';
import Nav from '../Nav/Nav';

export default function Main(){
    return (
        <>
            <Nav />
            <Routes>
                <Route path="reactjs-routing/contacts" element={<Contacts />} />
                <Route path="reactjs-routing/posts" element={<Posts />} />
                <Route path="reactjs-routing/photos" element={<Photos />} />
                <Route path="reactjs-routing/" exact element={<Home />} />
            </Routes>
        </>
    );

}