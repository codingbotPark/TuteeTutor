import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {

    const [navMenu,setNavMenu] = useState([
        {
            id:0,
            link:"./",
            title:"홈",
        },{
            id:1,
            link:"./selector",
            title:"선택자",
        },{
            id:2,
            link:"./position",
            title:"Position",
        },{
            id:3,
            link:"./display",
            title:"Display",
        }
    ])

    return (
        <nav className='nav'>
            {
                navMenu.map((menu) => (
                    <Link to={menu.link} className="navA" key={menu.id}>
                        <h2>{menu.title}</h2>
                    </Link>
                ))
            }
        </nav>
    );
};

export default NavBar;