import React, { PureComponent } from 'react';

class ProjectsCard extends PureComponent {
    render() {
        return (
            <div className="ProjectsCard">
                <a href="?#">
                    <div class="card">
                        <div class="content">
                            <br />
                            <img src="assets/MyProjects.jpg" class="level" id="projectlogo" />
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