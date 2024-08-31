//Profissional - Dados Pessoais
CREATE TABLE IF NOT EXISTS perfil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    location VARCHAR(255) NOT NULL, -- Endereço completo e CEP
    specialization VARCHAR(200) NOT NULL, -- Especialização com no máximo 200 caracteres
    summary VARCHAR(400), -- Resumo com no máximo 400 caracteres
    avatar LONGBLOB, -- Armazena a foto do usuário em formato binário
    instagram VARCHAR(255),
    twitter VARCHAR(255),
    github VARCHAR(255),
    email VARCHAR(255),
    curriculo LONGBLOB -- Armazena o arquivo PDF do currículo
);

//Experiencia Profissional
CREATE TABLE IF NOT EXISTS experiencia_profissional (
    id VARCHAR(50) PRIMARY KEY, -- Identificador único para a experiência
    perfil_id INT, -- Chave estrangeira referenciando o perfil
    company VARCHAR(255) NOT NULL, -- Nome da empresa
    position VARCHAR(255) NOT NULL, -- Cargo
    start_date DATE NOT NULL, -- Data de início
    end_date DATE, -- Data de término (pode ser NULL se for a posição atual)
    summary VARCHAR(400), -- Resumo das atividades, limitado a 400 caracteres
    is_current BOOLEAN DEFAULT FALSE, -- Indica se é a posição atual
    FOREIGN KEY (perfil_id) REFERENCES perfil(id) ON DELETE CASCADE
);

//Projetos
CREATE TABLE IF NOT EXISTS projetos (
    id VARCHAR(50) PRIMARY KEY,
    image VARCHAR(255), -- Caminho para a imagem do projeto
    title VARCHAR(255) NOT NULL, -- Título do projeto
    link VARCHAR(255), -- Link para o projeto
    description TEXT, -- Descrição detalhada do projeto
    -- A tabela projeto_tecnologia relacionará projetos com tecnologias
);

//tecnologias
CREATE TABLE IF NOT EXISTS tecnologias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- Nome da tecnologia
    type ENUM('programming-language', 'framework', 'database', 'metodo', 'ferramenta', 'outro') NOT NULL, -- Tipo de tecnologia
    level ENUM('Alto', 'Normal', 'Baixo') -- Nível de proficiência
);

//projetos-tecnologias
CREATE TABLE IF NOT EXISTS projeto_tecnologia (
    projeto_id VARCHAR(50), -- Chave estrangeira referenciando a tabela de projetos
    tecnologia_id INT, -- Chave estrangeira referenciando a tabela de tecnologias
    PRIMARY KEY (projeto_id, tecnologia_id),
    FOREIGN KEY (projeto_id) REFERENCES projetos(id) ON DELETE CASCADE,
    FOREIGN KEY (tecnologia_id) REFERENCES tecnologias(id) ON DELETE CASCADE
);

//habilidades / competencias
CREATE TABLE IF NOT EXISTS habilidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL, -- Nome da habilidade ou competência
    type ENUM('competencia', 'outro') NOT NULL, -- Tipo de habilidade
    level ENUM('Alto', 'Normal', 'Baixo') -- Nível de proficiência
);

//formação academica
CREATE TABLE IF NOT EXISTS formacao_academica (
    id VARCHAR(50) PRIMARY KEY,
    course VARCHAR(255) NOT NULL, -- Nome do curso
    institution VARCHAR(255) NOT NULL, -- Nome da instituição
    duration VARCHAR(50), -- Duração do curso (por exemplo, '2019 - 2023')
    status ENUM('Concluído', 'Em andamento', 'Abandonado') NOT NULL, -- Status do curso
    diploma LONGBLOB -- Armazena o diploma em formato binário
);

//certificados
CREATE TABLE IF NOT EXISTS certificacoes (
    id VARCHAR(50) PRIMARY KEY,
    certification VARCHAR(255) NOT NULL, -- Nome da certificação
    institution VARCHAR(255) NOT NULL, -- Nome da instituição certificadora
    date DATE NOT NULL, -- Data de emissão da certificação
    pdf LONGBLOB -- Armazena o certificado em formato binário
);

INSERT INTO tecnologias (name, type, level) VALUES
('JavaScript', 'programming-language', 'Alto'),
('Python', 'programming-language', 'Normal'),
('Java', 'programming-language', 'Baixo'),
('React', 'framework', 'Alto'),
('Angular', 'framework', 'Normal'),
('Vue.js', 'framework', 'Baixo'),
('MySQL', 'database', 'Alto'),
('MongoDB', 'database', 'Normal'),
('SQLite', 'database', 'Baixo'),
('Scrum', 'metodo', 'Alto'),
('Git', 'ferramenta', 'Alto'),
('Docker', 'ferramenta', 'Normal'),
('Postman', 'ferramenta', 'Baixo'),
('Design Thinking', 'outro', 'Normal');

INSERT INTO habilidades (name, type, level) VALUES
('Comunicação', 'competencia', 'Alto'),
('Trabalho em equipe', 'competencia', 'Alto'),
('Gestão de projetos', 'competencia', 'Normal'),
('Design Gráfico', 'outro', 'Normal'),
('Liderança', 'competencia', 'Alto'),
('Aprendizado contínuo', 'outro', 'Alto');

