import * as React from 'react';
import { CustomCard } from '../components'
import Grid from '@mui/material/Grid';

const datas = [
    {
        "forks_count": 2,
        "repo_url": "https://github.com/Crown-Commercial-Service/crown-marketplace-feature-tests",
        "open_issues_count": 1,
        "topics": [],
        "language": [
            "Gherkin",
            "Ruby"
        ],
        "stargazers_count": 0,
        "title": "Bump cucumber from 9.0.2 to 9.1.0",
        like: true
    },
    {
        "forks_count": 671,
        "repo_url": "https://github.com/dev-sec/ansible-collection-hardening",
        "open_issues_count": 36,
        "topics": [
            "ansible",
            "ansible-collection",
            "collection",
            "devsec",
            "hacktoberfest",
            "hardening",
            "linux",
            "mysql-hardening",
            "nginx",
            "nginx-hardening",
            "os-hardening",
            "playbook",
            "protection",
            "role",
            "ssh-hardening",
            "sysctl"
        ],
        "language": [
            "Jinja"
        ],
        "stargazers_count": 3446,
        "title": "Make disabling unused filesystems idempotent",
        like: true
    },
    {
        "forks_count": 15,
        "repo_url": "https://github.com/Tuwaiq-Data-Science-Bootcamp-V5/SVM_Lab1",
        "open_issues_count": 1,
        "topics": [],
        "language": [
            "Jupyter Notebook"
        ],
        "stargazers_count": 0,
        "title": "Rana",
        like: true
    },
    {
        "forks_count": 223,
        "repo_url": "https://github.com/introlab/odas",
        "open_issues_count": 154,
        "topics": [
            "audition",
            "beamformer",
            "embedded",
            "localization",
            "real-time",
            "robotics",
            "separation",
            "sound",
            "tracking"
        ],
        "language": [
            "C",
            "CMake"
        ],
        "stargazers_count": 678,
        "title": "Calculating azimuth and elevation angle basaed on delay time between microphones",
        like: true
    },
    {
        "forks_count": 0,
        "repo_url": "https://github.com/project-sulsul/SulSul-Android",
        "open_issues_count": 1,
        "topics": [],
        "language": [
            "Dart",
            "Swift",
            "Kotlin",
            "Objective-C"
        ],
        "stargazers_count": 0,
        "title": "[SUL-45] 소셜 로그인 서버 연동",
        like: true
    }
]

const Liked = () => {
    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:'5rem'}}>User's Liked Repositories</h1>
            <Grid container spacing={2}>
                {datas.map(data => (
                    <Grid item xs={6} key={data.repo_url}>
                        <CustomCard content={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Liked;