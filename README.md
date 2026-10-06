# 🚀 Portfólio — Matheus

Portfólio pessoal desenvolvido com **React** (Create React App): apresentação, sobre, skills, projetos (com modal de detalhes) e contato, com visual escuro, efeitos de vidro (*liquid glass*) e animações ligadas à rolagem.

---

## ▶️ Como rodar

Pré-requisito: Node.js 18+ e npm.

```bash
npm install
npm start
```

O site abre em `http://localhost:3000`. Para gerar a versão de produção:

```bash
npm run build
```

O resultado fica na pasta `build/`.

---

## 📁 Estrutura do projeto

```
portfolio/
├── public/
│   ├── images/
│   │   ├── About.jpg
│   │   ├── AUventura.png
│   │   ├── home.png
│   │   ├── RelogioXadrez.jpg
│   │   └── Vagas.png
│   ├── favicon.ico
│   ├── index.html
│   └── Resume.pdf          # currículo baixado pelo botão "Currículo"
├── src/
│   ├── components/
│   │   ├── GlassWanderer.css
│   │   ├── GlassWanderer.jsx   # forma de vidro que acompanha a rolagem
│   │   ├── Navbar.css
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.css
│   │   ├── About.jsx
│   │   ├── Contact.css
│   │   ├── Contact.jsx
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   ├── Projects.css
│   │   ├── Projects.jsx
│   │   ├── Skills.css
│   │   └── Skills.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

---

## 📦 Tecnologias usadas
- React 18
- JavaScript (ES6+)
- CSS com variáveis customizadas
- Scroll-driven animations (`animation-timeline`) — no Firefox as animações de rolagem ficam desativadas e o conteúdo aparece normalmente
- react-icons
- Create React App
