
# Rants: Project Plan

## 1. Overview

**Rants** is a social media application that takes the old Twitter as its inspiration: a place to rant about things in the world. It is also a fully fledged blog application, where users publish short "rants".

- Each rant is limited to roughly **256 characters** (limit may change; keep it configurable).

## 2. Tech Stack

| Layer        | Choice                          |
|--------------|---------------------------------|
| Web frontend | React + TypeScript              |
| Mobile       | React Native + TypeScript       |
| Backend      | Go, Gin                         |
| Database     | PostgreSQL                      |
| Cache        | Redis                           |
| Deployment   | Render, via Docker Compose      |

## 3. Frontend

### 3.1 Web (React TS)
- Styling: Tailwind CSS (may add a UI component framework)
- HTTP client: axios
- Containerization: Docker, served with nginx

### 3.2 Mobile (React Native TS)
- Styling: NativeWind
- HTTP client: axios, or an alternative if axios doesn't fit

## 4. Backend

### 4.1 Go API
- Framework: Gin (still work in progress / being evaluated)
- Database: SQL (PostgreSQL)
- Cache: Redis
- Containerization: Docker

## 5. Infrastructure & Deployment
- Local dev: Docker Compose (web, api, postgres, redis)
- Production: Render, deployed from Docker Compose setup

## 6. Core Features (draft)
- [ ] User accounts and authentication
- [ ] Create a rant (max ~256 chars, configurable limit)
- [ ] Feed / timeline
- [ ] Blog-style profile pages with a user's rants
- [ ] Interactions (replies, likes, etc.): TBD

## 7. Milestones (draft)
1. **Setup**: repo structure, Docker Compose with Postgres and Redis, Go API skeleton
2. **Backend core**: schema, migrations, auth, rants CRUD
3. **Web client**: React TS app, feed, compose rant
4. **Caching**: Redis for feed and hot reads
5. **Mobile client**: React Native app reusing the API
6. **Deploy**: Render, CI, production config

## 8. Open Questions
- Which UI framework for web, if any?
- Auth approach (sessions vs JWT)?
- Final character limit?
- Which axios alternative for React Native, if needed?
- Monorepo or separate repos for web, mobile, and API?
