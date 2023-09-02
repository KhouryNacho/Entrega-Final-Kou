import React from 'react';

import '../../styles/components/layouts/Header.css';

export const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/scm_logo.png" width="100" alt="scm_page" />
                <h1>SCM Webpage</h1>
            </div>
        </header>
    );
}


