function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                fullName: 'Nicoli Lisboa',
                birthDate: '2004-08-24',
                location: 'São Paulo',
                specialization: 'Desenvolvimento de Software',
                summary: 'Desenvolvedor com experiência em várias tecnologias e habilidades em desenvolvimento web e mobile.',
                avatar: 'imagens/avatar.png',
                instagram: 'https://instagram.com/yourprofile',
                twitter: 'https://twitter.com/yourprofile',
                github: 'https://github.com/yourprofile',
                email: 'mailto:your-email@example.com',
            });
        }, 0); // Simula um atraso de 1 segundo
    });
}

function fetchExperienceData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'exp1',
                    company: 'Empresa Exemplo 1',
                    position: 'Desenvolvedor Frontend',
                    startDate: '2021-01-01',
                    endDate: '2023-05-30',
                    summary: 'Desenvolvimento de interfaces web e manutenção de sistemas.',
                    isCurrent: false
                },
                {
                    id: 'exp2',
                    company: 'Empresa Exemplo 2',
                    position: 'Analista de Sistemas',
                    startDate: '2018-06-01',
                    endDate: null,
                    summary: 'Análise e desenvolvimento de sistemas empresariais.',
                    isCurrent: true
                }
            ]);
        }, 0); // Simula um atraso de 1 segundo
    });
}

function fetchProjectsData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'proj1',
                    image: 'imagens/projeto1.png',
                    title: 'Projeto 1',
                    link: 'https://classroom.google.com/',
                    description: 'Descrição detalhada do Projeto 1, destacando principais funcionalidades e tecnologias usadas.',
                    technologies: ['HTML', 'CSS', 'JavaScript']
                },
                {
                    id: 'proj2',
                    image: 'imagens/projeto2.png',
                    title: 'Projeto 2',
                    link: 'https://example.com/projeto2',
                    description: 'Descrição detalhada do Projeto 2, abordando os desafios e soluções implementadas.',
                    technologies: ['Node.js', 'Express', 'MongoDB']
                }
            ]);
        }, 0); // Simula um atraso de 1 segundo
    });
}

function fetchEducationData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'edu1',
                    course: 'Curso de Desenvolvimento Web',
                    institution: 'Instituição Exemplo',
                    duration: '2019 - 2023',
                    status: 'Concluído'
                },
                {
                    id: 'edu2',
                    course: 'Curso de Ciência da Computação',
                    institution: 'Outra Instituição',
                    duration: '2016 - 2018',
                    status: 'Concluído'
                }
            ]);
        }, 0); // Simula um atraso de 1 segundo
    });
}

function fetchCertificatesData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'cert1',
                    certification: 'Certificação em Desenvolvimento Frontend',
                    institution: 'Instituição Certificadora 1',
                    date: '2021-12-15',
                    pdf: 'certificados/certificacao1.pdf'
                },
                {
                    id: 'cert2',
                    certification: 'Certificação em Backend Development',
                    institution: 'Instituição Certificadora 2',
                    date: '2022-07-10',
                    pdf: 'certificados/certificacao2.pdf'
                }
            ]);
        }, 0); // Simula um atraso de 1 segundo
    });
}

function fetchSkillsData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                "programming-languages": [
                    { name: 'JavaScript', level: 'Alto' },
                    { name: 'Python', level: 'Normal' },
                    { name: 'Java', level: 'Baixo' }
                ],
                "frameworks": [
                    { name: 'React', level: 'Alto' },
                    { name: 'Angular', level: 'Normal' },
                    { name: 'Vue.js', level: 'Baixo' }
                ],
                "databases": [
                    { name: 'MySQL', level: 'Alto' },
                    { name: 'MongoDB', level: 'Normal' },
                    { name: 'SQLite', level: 'Baixo' }
                ],
                "metodos": [
                    {name: 'Scrum', level: "Alto"}
                ]
            });
        }, 0); // Simula um atraso de 1 segundo
    });
}
