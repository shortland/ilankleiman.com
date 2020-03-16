import React, { PureComponent } from 'react';

class ProjectsCard extends PureComponent {
    render() {
        return (
            <div className="ProjectsCard">
                <a href="?#">
                    <div class="card">
                        <div class="content">
                            <img src="https://maxcdn.icons8.com/Share/icon/Logos//chrome1600.png" class="level" id="projectlogo" />
                            <p id="projectname" class="title level">Projects</p>
                            <hr />
                            <p>Projects I've worked on</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default ProjectsCard;