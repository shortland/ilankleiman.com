import React, { PureComponent } from 'react';

class ContactCard extends PureComponent {
    render() {
        return (
            <div className="ContactCard">
                <a href="?#">
                    <div class="card">
                        <div class="content">
                            <img src="https://maxcdn.icons8.com/Share/icon/Logos//chrome1600.png" class="level" id="projectlogo" />
                            <p id="projectname" class="title level" style={{ color: 'rgba(250, 250, 250, 1.0)' }}>Contact</p>
                            <hr style={{ color: 'rgba(250, 250, 250, 1.0)' }} />
                            <p style={{ color: 'rgba(250, 250, 250, 1.0)' }}>Send me a message</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default ContactCard;