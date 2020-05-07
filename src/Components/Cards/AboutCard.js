import React, { PureComponent } from 'react';

class AboutCard extends PureComponent {
    render() {
        return (
            <div className="AboutCard">
                <a href="?#">
                    <div class="card">
                        <div class="content">
                            <br />
                            <img src="assets/AboutMe.jpg" class="level" id="projectlogo" />
                            <p id="projectname" class="title level" style={{ color: 'rgba(250, 250, 250, 1.0)' }}>About</p>
                            <hr style={{ color: 'rgba(250, 250, 250, 1.0)' }} />
                            <p style={{ color: 'rgba(250, 250, 250, 1.0)' }}>Who am I?</p>
                        </div>
                    </div>
                </a>
            </div >
        );
    }
}

export default AboutCard;