import { Link, useParams } from 'react-router-dom';

import './Header.css';

const HeaderLink = ({ page, selected }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    let className = selected ? 'headerlink-no-link ' : '';
    className += 'headerlink-title';

    return (
        <Link to={`/${page}`} className={className}>
            {title}
            <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>
                •
            </div>
        </Link>
    );
};

const Header = () => {
    const page = useParams().page || 'home';

    return (
        <div className='header'>
            <HeaderLink page='home' selected={page === 'home'} />
            <HeaderLink page='info' selected={page === 'info'} />
            <HeaderLink page='guides' selected={page === 'guides'} />
            <HeaderLink page='tools' selected={page === 'tools'} />
        </div>
    );
};

export default Header;