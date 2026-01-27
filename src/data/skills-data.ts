import {
    Monitor,
    Server,
    Code2,
    Network,
    Lock,
    Wrench
} from 'lucide-react';

export interface Skill {
    name: string;
    detail: string;
    url?: string;
}

export interface SkillCategory {
    title: string;
    icon: any;
    description: string;
    skills: Skill[];
}

export const skillsData: Record<string, SkillCategory> = {
    infrastructure: {
        title: "Infrastructure",
        icon: Monitor,
        description: "End-to-end enterprise systems management.",
        skills: [
            { name: 'Windows Server', detail: 'Expert in Active Directory, GPO management, and enterprise Windows Server deployment and maintenance.' },
            { name: 'Linux Admin', detail: 'Proficient in Ubuntu/CentOS administration, shell scripting, and system optimization for production environments.' },
            { name: 'Azure Cloud', detail: 'Experienced with Azure Virtual Machines, networking, storage solutions, and cloud infrastructure architecture.' },
            { name: 'Active Directory', detail: 'Advanced knowledge of user management, security policies, and domain controller configuration.' },
            { name: 'ITSM', detail: 'Skilled in IT Service Management frameworks including incident, problem, and change management processes.' }
        ]
    },
    hardware: {
        title: "Hardware Systems",
        icon: Server,
        description: "Hardware-level diagnostics and embedded integration.",
        skills: [
            { name: 'ESP32/IOT', detail: 'Extensive experience with ESP32 microcontrollers, sensor integration, and IoT device development.' },
            { name: 'PCB Diagnostics', detail: 'Skilled in circuit analysis, component-level troubleshooting, and PCB design validation.' },
            { name: 'Serial Protocols', detail: 'Proficient in UART, I2C, SPI communication protocols for embedded systems integration.' },
            { name: 'Edge Computing', detail: 'Experienced with edge AI deployments, local processing, and distributed computing architectures.' },
            { name: 'Robotics', detail: 'Hands-on experience with robotics systems, motor control, and autonomous navigation algorithms.' }
        ]
    },
    development: {
        title: "Development",
        icon: Code2,
        description: "Technical automation and custom tool development.",
        skills: [
            { name: 'Python', detail: 'Advanced Python development for automation, data analysis, machine learning, and API development.' },
            { name: 'Node.js', detail: 'Backend development with Express, API design, and real-time applications using Node.js ecosystem.' },
            { name: 'C++', detail: 'Performance-critical applications, embedded systems programming, and low-level hardware interfacing.' },
            { name: 'Shell Scripting', detail: 'Bash and PowerShell scripting for system automation, deployment pipelines, and task scheduling.' },
            { name: 'SQL Systems', detail: 'Database design, optimization, complex queries, and data modeling in MySQL, PostgreSQL, and MSSQL.' },
            { name: 'TypeScript', detail: 'Type-safe web application development with React, modern frontend architecture, and tooling.' }
        ]
    },
    networking: {
        title: "Enterprise Networking",
        icon: Network,
        description: "Advanced network design and routing optimization.",
        skills: [
            { name: 'WiFi 7 Systems', detail: 'Next-generation wireless networking with Wi-Fi 7, mesh networks, and high-density deployments.' },
            { name: 'Protocol Analysis', detail: 'Deep packet inspection, Wireshark proficiency, and network traffic analysis for troubleshooting.' },
            { name: 'Routing Logic', detail: 'Advanced routing protocols including OSPF, BGP, and dynamic routing configuration.' },
            { name: 'Network Security', detail: 'Firewall configuration, VPN setup, intrusion detection, and network segmentation strategies.' },
            { name: 'VLANs', detail: 'Virtual LAN design, implementation, and management for network isolation and traffic optimization.' }
        ]
    },
    security: {
        title: "Security Certifications",
        icon: Lock,
        description: "Dedicated focus on cybersecurity frameworks and standards.",
        skills: [
            {
                name: 'CompTIA Tech+',
                detail: 'Certified in fundamental IT support, hardware troubleshooting, and technical problem-solving.',
                url: 'https://www.credly.com/badges/ea8e2b0f-f5ef-463d-9263-81974372b11f/public_url' // Replace with your actual badge URL
            },
            {
                name: 'Google Cybersecurity',
                detail: 'Comprehensive training in threat detection, security operations, and incident response procedures.',
                url: 'https://coursera.org/share/c32e248d166a1420e03efe3b63843555' // Replace with your actual cert URL
            },
            {
                name: 'Google IT Support Professional',
                detail: 'Foundational training in network protocols, system administration, OS management, and end-to-end hardware troubleshooting.',
                url: 'https://coursera.org/share/f0848ba21452f59c46feaa084014611f'
            },
            {
                name: 'Azure Security',
                detail: 'Cloud security best practices, identity management, and Azure security center configuration.',
                url: 'https://learn.microsoft.com/api/credentials/share/en-us/williamsokol-8877/9E78D816A1C8556A?sharingId=B526F8672CCDB3F4' // Replace with your actual cert URL
            },
        ]
    },
    operations: {
        title: "Operations",
        icon: Wrench,
        description: "Strategic project management and technical documentation.",
        skills: [
            { name: 'Agile/Scrum', detail: 'Certified Scrum Master methodologies, sprint planning, and agile team leadership.' },
            { name: 'CI/CD Pipelines', detail: 'Automated build, test, and deployment pipelines using Jenkins, GitHub Actions, and GitLab CI.' },
            { name: 'Technical Writing', detail: 'Comprehensive documentation, API references, user guides, and system architecture documents.' },
            { name: 'Stakeholder Mgmt', detail: 'Effective communication with clients, cross-functional teams, and executive leadership.' },
            { name: 'Jira', detail: 'Project tracking, backlog management, workflow customization, and agile reporting in Jira.' }
        ]
    }
};