import React, { PureComponent } from 'react';
import ContactCard from './Cards/ContactCard';
import AboutCard from './Cards/AboutCard';
import ProjectsCard from './Cards/ProjectsCard';

class Footer extends PureComponent {
    render() {
        return (
            <div className="Footer" style={{ position: 'fixed', bottom: '0px', left: '0px', backgroundColor: 'rgba(151, 108, 134, 1.0)', width: '100%', color: 'rgba(250, 250, 250, 1.0)' }}>
                Designed & built by Ilan Kleiman - ©2020
            </div>
        );
    }
}

export default Footer;
