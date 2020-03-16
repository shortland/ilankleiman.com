import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    render() {
        return (
            <div className="NavBar">
                <div className="header header-clear unselectable header-animated" style={{ 'position': 'fixed' }}>
                    <div className="header-nav" id="header-menu">
                        <div className="nav-left">
                            <div className="nav-item">
                                <a href="?#">Projects</a>
                            </div>
                            <div className="nav-item">
                                <a href="?#">Contact</a>
                            </div>
                            <div className="nav-item">
                                <a href="?#">About</a>
                            </div>
                        </div>

                        <div className="nav-right">
                            <div className="nav-right nav-item text-center" style={{ fontSize: '2em' }}>
                                <a href="https://dev.to/shortland" target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <i className="fab fa-wrapper fa-dev" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a href="https://github.com/shortland" target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <i className="fab fa-wrapper fa-github" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a href="https://www.linkedin.com/in/ilan-kleiman/" target="_blank" rel="noopener noreferrer">
                                    <span className="icon">
                                        <i className="fab fa-wrapper fa-linkedin" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default NavBar;