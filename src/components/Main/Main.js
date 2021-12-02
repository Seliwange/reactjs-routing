import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import Posts from '../Posts/Posts';
import Photos from '../Photos/Photos';
import data from '../Contacts/Data';

export default function Main(){
    return (
        <Routes>
            <Route path="contacts" element={<Contacts contacts={data} />} />
            <Route path="posts" element={<Posts />} />
            <Route path="photos" element={<Photos />} />
            <Route path="/" exact element={<Home />} />
        </Routes>
    );

}