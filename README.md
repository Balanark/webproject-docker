# WebProject Docker

This is a test web project I'm using to practice working with Docker and automatic publishing to Docker Hub via GitHub Actions.

## Project contents:
- `index.html` — main HTML page
- `style.css` — styles for the website
- `main.js` — JavaScript logic
- `Dockerfile` — instructions for building the Docker image

## Automatic publishing
A GitHub Actions workflow is used to:
1. Build the Docker image on every push to the main branch
2. Push it to [Docker Hub](https://hub.docker.com/r/pavelgenchev/webproject-docker)

## Docker Hub
The Docker image can be found here:
[pavelgenchev/webproject-docker](https://hub.docker.com/r/pavelgenchev/webproject-docker)

---

This project is for learning and testing purposes. 🙌
