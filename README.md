<h1 align="center">
    Cápsula do tempo
</h1>

<p align="center">
    Projeto da trilha Explorer do NLW Spacetime ⌛
</p>

<p align="center">
  <a href="#objetivo">Objetivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ideias">Ideias realizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<p align="center">
  <img alt="Timeline Preview" src=".github/preview.png">
</p>

<h2 id="objetivo">🚀 <b>Objetivo:</b></h2>

- Desenvolver uma aplicação Web responsiva para o usuário rever memórias e acontecimentos marcantes da sua vida.

<h2 id="tecnologias">🔧 <b>Ferramentas:</b></h2>

- HTML e CSS
- JavaScript
- Git e GitHub
- Figma

<h2 id="ideias">💡 <b>Ideias realizadas:</b></h2>

- **[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components):** 3 (três) componentes customizados criados com JavaScript para reutilização simples. São os seguintes:

    - **`<nlw-loader></nlw-loader>`** : Tag usada para criar o loader do site. Tal tag possui os seguintes atributos:

        - `loader-photo=""=""` -> Passe a URL do seu logotipo. Caso não passe, o logotipo da NLW Spacetime aparecerá.

        - `loader-description=""` -> Passe o texto alternativo do seu logotipo. Caso não passe, tal texto será uma descrição do logotipo da NLW Spacetime.

    - **`<my-profile></my-profile>`** : Tag usada para criar o perfil do lado esquerdo do site. Tal tag possui os seguintes atributos:

        - `logo-photo=""` -> Passe a URL do seu logotipo. Caso não passe, o logotipo da NLW Spacetime aparecerá.

        - `logo-description=""` -> Passe o texto alternativo do seu logotipo. Caso não passe, tal texto será uma descrição do logotipo da NLW Spacetime.
        
        - `profile-photo=""` -> Passe a URL da sua foto de perfil. Caso não passe, uma imagem predeterminada aparecerá.
        
        - `profile-description=""` -> Passe o texto alternativo da sua foto de perfil. Caso não passe, tal texto estará predeterminado.
        
        - `author=""` -> Passe o seu nome de usuário. Caso não passe, um nome alternativo aparecerá.

    - **`<moment-in-time></moment-in-time>`** : Tag usada para criar seu momento marcante. Tal tag possui os seguintes atributos:

        - `moment-date=""` -> Passe a data do momento marcante. Caso não passe, um texto descritivo será exibido.

        - `moment-title=""` -> Passe o título do momento marcante. Caso não passe, um texto descritivo será exibido.
        
        - `moment-photo=""` -> Passe a URL da sua foto do momento marcante. Caso não passe, uma imagem predeterminada aparecerá.
        
        - `moment-photo-description=""` -> Passe o texto alternativo a sua foto do momento marcante. Caso não passe, tal texto estará predeterminado.
        
        - `moment-description=""` -> Passe a descrição daquele momento marcante. Caso não passe, um texto descritivo será exibido.

<h2 id="projeto">💻 <b>Projeto:</b></h2>

- [Veja o projeto online](https://explorer-nlw-spacetime.vercel.app/)

<h2 id="layout">🎨 <b>Layout:</b></h2>

- [Figma do projeto](https://www.figma.com/community/file/1240071097028170811)

<br>

<p align="center">
  Feito com 💜 por mim | Bruno Souza
</p>
