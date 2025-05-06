CREATE DATABASE corinthians;

\c corinthians;

CREATE TABLE jogadores (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    idade VARCHAR(100) UNIQUE NOT NULL,
    gols INTEGER NOT NULL,
    photo TEXT
);

CREATE TABLE times (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo TEXT NOT NULL,
    jogador_id INTEGER REFERENCES jogadores(id) ON DELETE CASCADE,
    UNIQUE (name, jogador_id)
);

INSERT INTO jogadores (name, idade, gols, photo) VALUES
('Yuri Alberto', '23', 112, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853553783422%29_%28cropped%29.jpg/800px-Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853553783422%29_%28cropped%29.jpg'),
('Rodrigo Garro', '27', 33, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mlhi3c1-CCxHUfHXIyILQe8Hhwv6JeuJsw&s'),
('Hugo Souza', '25', 0, 'https://s2-ge.glbimg.com/Oj4aOgTyouQxxdc13puPF3EeXck=/2766x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/v/y/WcIzfcRaGYxA1eHWzBqA/hugosouza.jpg'),
('Carrilo', '32', 80, 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/12/Carrillo-Corinthians.webp?w=1200&h=1200&crop=1'),
('Romero', '31', 155, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/%C3%81ngel_Romero_-_Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853554974439%29_%28cropped%29.jpg/250px-%C3%81ngel_Romero_-_Sulamericana_CUP_2023_Semifinal_-_Corinthians_x_Fortaleza-CE_%2853554974439%29_%28cropped%29.jpg'),
('Cristiano Ronaldo', '40', 10000, 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'),
('Neymar', '33', 3000, 'https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/C6RYVXB7LNF2FIIJ4IKAASJ4MM.png?auth=17ee78eb32b6263d4045b88f948716fdaea54dd1f39abb33e35eb83f5a51c30b&width=1600&height=900');

INSERT INTO times (name, logo, jogador_id) VALUES
('Corinthians', 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png', 6),
('Corinthians', 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png', 7),
('Corinthians', 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png', 8),
('Corinthians', 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png', 9),
('Corinthians', 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png', 10),
('Al Nassr FC', 'https://upload.wikimedia.org/wikipedia/pt/6/65/Al-Nassr_Football_Club.png', 11),
('Santos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Santos_Logo.png/250px-Santos_Logo.png', 12);
