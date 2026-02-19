# Case Study Investigation

For this section, you will investigate a working Express application called **Bookmark Manager**. The source code is located in the `case-study/` folder of this repo.

**Setup:** Open a terminal, `cd` into the `case-study/` folder, and run:

```sh
npm i
npm start
```

The server will start at `http://localhost:8080`. Keep the terminal open — you'll need to observe the server logs as you send requests.

Use both the source code and Postman (sending requests to `http://localhost:8080`) to answer the questions below.

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content).

---

## Question 1: Code Tracing

A user sends a `GET` request to `/api/bookmarks`. Trace the request through the application starting from when the server receives it. Which files and functions are involved, and in what order? What does the response look like?

**Tip:** Send this request using Postman and observe what appears in the terminal where the server is running. This can help you understand the flow.

**Your Answer:**


## Question 2: Postman Investigation

With the case study server running locally, use Postman to send the following requests to `http://localhost:8080` and record your findings. For each request, provide: the **method**, **full URL**, **body** (if applicable), **status code** received, the **terminal log** printed by the server, and a **brief description** of the response data.

1. `GET /api/bookmarks` — Retrieve all bookmarks
2. `POST /api/bookmarks` with the JSON body `{ "title": "GitHub", "url": "https://github.com" }` — Create a new bookmark
3. `GET /api/bookmarks/999` (an ID that doesn't exist) — Attempt to retrieve a non-existent bookmark
4. `PATCH /api/bookmarks/1` with the JSON body `{ "title": "Updated Title" }` — Update a bookmark
5. `DELETE /api/bookmarks/1` — Delete a bookmark, then send `GET /api/bookmarks` to confirm it was removed

**Your Answer:**


## Question 3: REST Analysis

Look at the endpoints defined in `case-study/server/index.js`. For each endpoint, notice:
- The **HTTP method**
- The **URL pattern**
- The **CRUD operation** it performs (Create, Read, Update, or Delete)

Do the endpoints follow REST conventions? If any endpoint does NOT follow REST conventions, explain what is wrong and what you would change to make it RESTful.

**Your Answer:**


## Question 4: MVC Identification

Look at the file structure of the case study application.

1. Identify which files correspond to the **Model**, **View**, and **Controller** layers. For each, explain its responsibility in 1-2 sentences.
2. Find one place in the code where the **separation of concerns** between layers could be improved. Explain what the issue is and how you would fix it.

**Your Answer:**
