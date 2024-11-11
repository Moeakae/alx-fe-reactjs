import { Links } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ display: 'flex', padding: '10px', backgroundColor: 'yellow', color: 'white' }}>
            <Links to='/home' style={{ margin: '10px 0', color: 'white' }}>Home</Links>
            <Links to='/about' style={{ margin: '10px 0', color: 'white' }}>About</Links>
            <Links to='/services' style={{ margin: '10px 0', color: 'white' }}>Services</Links>
            <Links to='/contact' style={{ margin: '10px 0', color: 'white' }}>Contact</Links>


        </nav>
    );
} 
export default Navbar;