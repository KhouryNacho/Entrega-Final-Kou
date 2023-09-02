import { Link } from "react-router-dom";
import '../../styles/components/layouts/Nav.css';

export const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ScmMembersPage">SCM Members</Link></li>
                    <li><Link to="/ContactUsPage">Contact Us</Link></li>
                    <li><Link to="/NewsPage">News and Announcementes</Link></li>
                    <li><Link to="/GalleryPage">Mod Gallery</Link></li>
                </ul>
            </div>
        </nav>
    );
}

