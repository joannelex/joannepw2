import React from 'react'
import './Experience.css'
import Amazon from '../assets/Amazon.png'
import SAP from '../assets/SAP.png'
import Trulioo from '../assets/Trulioo.png'

export const Experience = () => {
    // function handleUBC() {window.open('https://www.ubc.ca/')};
    // function handleTrulioo() {window.open('https://www.trulioo.com/')};
    // function handleNwPlus() {window.open('https://nwplus.io/')};

    return(
        <div className="experience-container">

            <div className='internship-conatiner'>
                <img src={ Amazon } className="internship-logo" alt="Amazon"/>
                <div>
                    <div className='internship-header-row'>
                        <div className='internship-header'>
                            <div className='internship-title'>AWS @ <span id='amazon'>Amazon</span></div>
                            <div className='internship-position'> /Software developer intern</div>
                        </div>
                        <div className='internship-date'>May 2024 - Present</div>
                    </div>
                    <div className='internship-description'>
                        <ul>
                            <li>Developing a new program onboarding service initiated from SQS notification, using AWS CDK to deploy ECS/Fargate, Lambda, and CloudWatch to streamline the logic for over 300 updates/month</li>
                            <li>Exposing internal program data through Smithy APIs, enabling secure access for external services via a gateway</li>
                            <li>Optimizing the service with VPC, load balancers, and AppConfig, ensuring high security, availability, and seamless configuration</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='internship-conatiner'>
                <img src={ SAP } id="internship-logo-SAP" alt="SAP"/>
                <div>
                    <div className='internship-header-row'>
                        <div className='internship-header'>
                            <div className='internship-title'>Concur @ <span id='sap'>SAP</span></div>
                            <div className='internship-position'> /Software developer intern</div>
                        </div>
                        <div className='internship-date'>Jan 2024 - May 2024</div>
                    </div>
                    <div className='internship-description'>
                        <ul>
                            <li>Architected and developed end-to-end form system via querie mapping, store procedures and custom hooks to build full-stack app for customer entity creation, using React, SQL and Java Spring</li>
                            <li>Automated the filtering process of Jira tickets generated from the internal development dashboard using custom scripts and Jira API, reducing 30% of manual sorting time and improving team productivity</li>
                            <li>Automated the testing process in integration unstable by routing with an additional header via service mesh</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='internship-conatiner'>
                <img src={ Trulioo } className="internship-logo" alt="Trulioo"/>
                <div>
                    <div className='internship-header-row'>
                        <div className='internship-header'>
                            <div className='internship-title'><span id='trulioo'>Trulioo</span></div>
                            <div className='internship-position'> /Software developer intern</div>
                        </div>
                        <div className='internship-date'>Sept 2022 - Apr 2023</div>
                    </div>
                    <div className='internship-description'>
                        <ul>
                            <li>Built a navigation bar for the main portal using React, TypeScript, HTML/CSS, and C# in MVC framework and micro-service architecture, serving all customers</li>
                            <li>Upgraded all 5 micro-frontend repositories to React 18 and increased the test coverage to 100% using RTL</li>
                            <li>Implemented performance + security enhancements using caching, code modularization and parameterized queries</li>
                        </ul>
                    </div>
                </div>
            </div>               

        </div>
    )
}

export default Experience