import React from 'react';
import lazypic from '../../images/lauren-kay-wUMfrBfNNq0-unsplash (1).jpg'

const NotFound = () => {
    return (
        <div className='m-auto text-center'>
            <h2>This path is not found</h2>
            <h5>Page 404</h5>
            <img className='w-50' src={lazypic} alt="" />
        </div>
    );
};

export default NotFound;