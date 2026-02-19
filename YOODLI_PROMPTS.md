# Yoodli AI Interview Prompts

This document defines the 2 Yoodli roleplays for the Checkpoint 5.1 verbal assessment. Rubric TBD.

---

## Roleplay 1: Explain Servers to a Non-Technical Person

**Scenario:** You're explaining to a friend who has never written code what happens when they type a URL into their browser and see a webpage.

### Initial Prompt
> "Imagine you're explaining to a friend who has never coded what happens when they type a URL into their browser and see a webpage. Walk them through what a server is and the role it plays in this process."

### Follow-Up Probes
1. "What's the difference between a development server running on your computer and a deployed server that anyone can access?"
2. "What does it mean to 'deploy' an application?"

### Grading Keywords
Look for the fellow to mention or explain these concepts:
- **server** — a computer/program that listens for and responds to requests
- **client** — the browser or device making the request
- **request** and **response** — the two parts of the HTTP cycle
- **HTTP** — the protocol used for communication
- **URL / endpoint** — the address the client sends the request to
- **localhost** — the local development server address
- **hosting / deployment** — making the server publicly accessible
- **port** — the specific channel the server listens on

---

## Roleplay 2: Technical Interview — REST and MVC

**Scenario:** The interviewer asks about API design patterns and code organization.

### Initial Prompt
> "What does it mean for an API to follow REST conventions?"

### Follow-Up Probes
1. "Walk me through the REST endpoints you would create for managing a collection of blog posts."
2. "How would you organize the server code using the MVC pattern?"

### Grading Keywords
Look for the fellow to mention or explain these concepts:
- **REST** — a convention for designing API endpoints
- **CRUD** — Create, Read, Update, Delete
- **HTTP methods** — GET (read), POST (create), PATCH/PUT (update), DELETE (delete)
- **URL patterns** — `/api/posts` for collections, `/api/posts/:id` for single resources
- **path parameters** — dynamic segments like `:id`
- **Model** — manages the data (the "database" layer)
- **View** — the user interface (the frontend)
- **Controller** — handles requests and coordinates between model and view
- **separation of concerns** — each layer has a single responsibility

---

## General Yoodli Configuration Notes

- **Time limit per roleplay:** 3-5 minutes
- **Rubric:** TBD
