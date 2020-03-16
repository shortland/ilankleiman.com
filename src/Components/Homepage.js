import React, { PureComponent } from 'react';
import ContactCard from './Cards/ContactCard';
import AboutCard from './Cards/AboutCard';
import ProjectsCard from './Cards/ProjectsCard';

class Homepage extends PureComponent {
    render() {
        return (
            <div className="Homepage">
                <div className="row row--no-wrap">
                    <div className="col-10">
                        <ProjectsCard />
                    </div>
                    <div className="col-10">
                        <ContactCard />
                    </div>
                    <div className="col-10">
                        <AboutCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
