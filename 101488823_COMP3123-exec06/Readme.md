# Week06 Exercise - Notes Application

Build a Restful CRUD API for a simple Note-Taking application using Node.js, Express and MongoDB.

## Steps to Setup

1. Install dependencies

```bash
npm install
```
2. Fix error and write Note API code

3. Run Server

```bash
node server.js
```

4. Optionally implement Docker OR vercel Hosting

5. Test all API on Postman and take screenshots at  URL <http://localhost:8081>

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:noteId` | Get a single note by ID |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:noteId` | Update a note by ID |
| DELETE | `/api/notes/:noteId` | Delete a note by ID |

## Sample Note Payload

### Create Note (POST)
```json
{
    "noteTitle": "Sample Note Title",
    "noteDescription": "Sample Note Description",
    "priority": "HIGH"
}
```

### Update Note (PUT)
```json
{
    "noteTitle": "Updated Note Title",
    "noteDescription": "Updated Note Description",
    "priority": "MEDIUM"
}
```

**Note:** `dateAdded` and `dateUpdated` are automatically set by the system.
**Priority values:** HIGH, MEDIUM, or LOW (defaults to LOW if not provided)