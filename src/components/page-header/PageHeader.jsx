import React from 'react';

import './page-header.scss';

import bg from 'assets/footer-bg.jpg';

const PageHeader = ({children}) => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{children}</h2>
        </div>
    );
}


export default PageHeader;
