# Checkpoint 5.1: Backend Fundamentals

This is a 2-day checkpoint assessing your understanding of the first half of the Backend module.

**Day 1:** Short Response + Case Study Investigation + Yoodli AI Interview
**Day 2:** Build a Server

**Sections:**
- [Setup](#setup)
- [Part 1: Short Response (24 points)](#part-1-short-response-24-points)
- [Part 2: Yoodli AI Interview (TBD)](#part-2-yoodli-ai-interview-tbd)
- [Part 3: Case Study Investigation (24 points)](#part-3-case-study-investigation-24-points)
- [Part 4: Build a Server (34 points)](#part-4-build-a-server-34-points)
  - [API Reference](#api-reference)
  - [Step 1: Set Up the Express App (6 pts)](#step-1-set-up-the-express-app-6-pts)
  - [Step 2: Build the Model (8 pts)](#step-2-build-the-model-8-pts)
  - [Step 3: Build the Controllers (10 pts)](#step-3-build-the-controllers-10-pts)
  - [Step 4: Define REST Endpoints (4 pts)](#step-4-define-rest-endpoints-4-pts)
  - [Step 5: Test with Postman (6 pts)](#step-5-test-with-postman-6-pts)
  - [Code Grading Checklist (34 points)](#code-grading-checklist-34-points)

**Total: 82 points + Yoodli (TBD)**

**<details><summary>Asking ChatGPT for Help</summary>**

If you're stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what's being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

</details>

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy Lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

```sh
git checkout -b draft   # switch to the draft branch before starting

cd from-scratch         # navigate to the Build a Server folder
npm i                   # install dependencies
npm run dev             # start the server with nodemon

git add -A              # add changed files to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

When you are finished, create a pull request and tag your instructor for review.

---

## Part 1: Short Response (24 points)

There are 4 short response questions for you to answer in the [`SHORT_RESPONSE.md`](./SHORT_RESPONSE.md) file. Each question is worth 6 points (3 points for writing quality and 3 points for technical content).

The questions assess your knowledge of:
1. Servers and the HTTP request-response cycle
2. Express middleware
3. API key security and the proxy pattern
4. Debugging a server

---

## Part 2: Yoodli AI Interview (TBD)

Complete 2 Yoodli AI interview roleplays. Your instructor will provide the Yoodli links and rubric.

The roleplays assess your ability to verbally explain:

1. How the internet works — servers, clients, HTTP, deployment
2. REST and MVC — REST conventions, endpoint design, MVC architecture

**Tips:**
- Use proper technical vocabulary (server, client, request, response, endpoint, middleware, controller, model, etc.)
- Give concrete examples when possible
- It's okay to pause and think — clarity matters more than speed

---

## Part 3: Case Study Investigation (24 points)

For this section, you will investigate a working Express application called **Bookmark Manager**.

The source code is located in the [`case-study/`](./case-study/) folder. To run the app locally:

```sh
cd case-study
npm i
npm start
```

The server will start at `http://localhost:8080`. **Keep the terminal open** — you'll observe the server logs as you send Postman requests.

Open the source code and study the file structure:

```
case-study/
├── server/
│   ├── index.js                          # Express app setup, middleware, endpoints
│   ├── controllers/
│   │   └── bookmarkControllers.js        # Controller functions for each endpoint
│   └── models/
│       └── Bookmark.js                   # In-memory data model
├── public/
│   ├── index.html                        # Frontend HTML
│   ├── styles.css                        # Frontend CSS
│   └── app.js                            # Frontend JavaScript (fetch calls & DOM helpers)
└── package.json
```

Answer the 4 investigation questions in [`CASE_STUDY.md`](./CASE_STUDY.md). Each question is worth 6 points. You will need both the source code and Postman to complete this section.

**Tips:**
- Read through the code carefully before answering. Start with `server/index.js` to understand the overall structure.
- Use Postman to send requests to `http://localhost:8080` and observe the responses.
- Watch the terminal where the server is running — the `logRoutes` middleware prints useful information about each incoming request.
- Pay close attention to status codes, response bodies, and how data flows between the model, controller, and client.

---

## Part 4: Build a Server (34 points)

Build a working Express server with MVC architecture that powers the provided frontend application.

Navigate to the `from-scratch/` folder to work on this section:

```sh
cd from-scratch
npm i
npm run dev
```

**Provided (do not modify):**
- `from-scratch/public/` — A frontend application (HTML, CSS, and JavaScript) that sends `fetch` requests to your server's API. If your server is implemented correctly, the frontend will work without any changes.
- `from-scratch/package.json` — Project configuration with `express` as a dependency

**Files you complete:**
- `from-scratch/server/index.js` — Express app setup, middleware, and endpoint definitions
- `from-scratch/server/models/Item.js` — In-memory data model
- `from-scratch/server/controllers/itemControllers.js` — Controller functions

### API Reference

The frontend expects the following API endpoints to exist on your server:

| Method   | Endpoint         | Request Body        | Description             | Success Status |
| -------- | ---------------- | ------------------- | ----------------------- | -------------- |
| `POST`   | `/api/items`     | `{ "name": "..." }` | Create a new item       | `201`          |
| `GET`    | `/api/items`     | —                   | Get all items           | `200`          |
| `GET`    | `/api/items/:id` | —                   | Get a single item by ID | `200`          |
| `PATCH`  | `/api/items/:id` | `{ "name": "..." }` | Update an item's name   | `200`          |
| `DELETE` | `/api/items/:id` | —                   | Delete an item          | `200`          |

**Error responses:**
- Return `404` with `{ "message": "..." }` when an item is not found
- Return `400` with `{ "message": "..." }` when a required field (`name`) is missing

### Step 1: Set Up the Express App (6 pts)

In `from-scratch/server/index.js`:
1. Create a `logRoutes` middleware function that logs the method and URL of every request (along with the current time) and calls `next()`
2. Register middleware in this order: `logRoutes`, `express.json()`, `express.static()`
3. The server should listen on port `8080`

### Step 2: Build the Model (8 pts)

In `from-scratch/server/models/Item.js`:
1. Create an `id` counter and a `getId()` helper function
2. Create an in-memory array with 2-3 starter items (each with an `id` and `name`)
3. Implement all 5 static methods: `create`, `list`, `find`, `update`, `delete`
4. Model methods should NOT use `req` or `res` — they only manage data

### Step 3: Build the Controllers (10 pts)

In `from-scratch/server/controllers/itemControllers.js`:
1. Import the `Item` model
2. Implement all 5 controller functions: `createItem`, `listItems`, `getItem`, `updateItem`, `deleteItem`
3. Each controller should parse inputs from `req`, call the appropriate model method, and send the response with the correct status code
4. Handle error cases: return `400` for missing `name`, return `404` for items not found

### Step 4: Define REST Endpoints (4 pts)

In `from-scratch/server/index.js`:
1. Import the controllers
2. Define all 5 RESTful routes (see the API Reference table above)
3. Routes should be defined after middleware registration

### Step 5: Test with Postman (6 pts)

After your server is working, use Postman to test each endpoint. Take screenshots or export your Postman collection and include them in a `postman/` folder.

You must demonstrate:
1. A successful `POST` creating a new item (showing 201 status)
2. A `GET` retrieving all items
3. A `GET` with an invalid ID showing a 404 response
4. A `PATCH` successfully updating an item
5. A `DELETE` removing an item
6. A follow-up `GET` confirming the item was deleted

### Code Grading Checklist (34 points)

**Express Setup (6 pts)**
- [ ] Express app is created and listens on a port
- [ ] `express.json()` middleware is registered
- [ ] `express.static()` serves the `public/` folder
- [ ] A custom `logRoutes` middleware logs method and URL for every request
- [ ] Middleware is registered before routes
- [ ] Server starts without errors

**Model (8 pts)**
- [ ] In-memory array is private to the module (not exported directly)
- [ ] `create()` returns a new item with a unique `id`
- [ ] `list()` returns a copy of all items
- [ ] `find()` returns a single item by ID or `undefined`
- [ ] `update()` modifies and returns the item, or returns `null` if not found
- [ ] `delete()` removes and returns the item, or returns `null` if not found
- [ ] IDs are unique and auto-incrementing
- [ ] Model methods do not use `req` or `res` (proper separation of concerns)

**Controllers (10 pts)**
- [ ] Controllers import and use the model (no direct array manipulation)
- [ ] `createItem` reads from `req.body`, returns `201` status with the new item
- [ ] `listItems` sends the full list of items
- [ ] `getItem` parses `req.params.id`, returns `404` with message if not found
- [ ] `updateItem` parses params and body, returns `404` if not found
- [ ] `deleteItem` parses `req.params.id`, returns `404` if not found
- [ ] All controllers send appropriate status codes
- [ ] Request body validation (returns `400` if `name` is missing for create/update)
- [ ] Controllers are exported and imported properly
- [ ] No model logic lives in controllers (separation of concerns)

**REST Endpoints (4 pts)**
- [ ] Routes follow REST conventions (correct methods + URL patterns)
- [ ] Path parameters are used for single-resource endpoints (`:id`)
- [ ] All 5 CRUD routes are defined
- [ ] Routes are defined after middleware registration

**Postman Testing (6 pts)**
- [ ] `POST` screenshot shows `201` status and created item
- [ ] `GET` all screenshot shows the list of items
- [ ] `GET` by invalid ID shows `404` status and error message
- [ ] `PATCH` screenshot shows updated item
- [ ] `DELETE` screenshot shows the deleted item
- [ ] Follow-up `GET` confirms deletion
