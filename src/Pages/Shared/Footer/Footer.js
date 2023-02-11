import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p className='fw-bolder fs-5'><small>copyright &#169; {year} </small></p>
        </footer>
    );
};

export default Footer;