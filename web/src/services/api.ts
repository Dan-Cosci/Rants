export const seedData = {
  users: [
    {
      id: "9c4e0b3a-1f2d-4a5e-8b7c-3d1e2f4a5b6c",
      username: "alice_w",
      email: "alice@example.com",
      display_name: "Alice Watanabe",
      bio: "Backend dev. Loves Postgres and long walks in the query planner.",
      created_at: "2026-01-14T09:12:33Z",
    },
    {
      id: "5b8a7c6d-2e3f-4b1a-9c0d-4e5f6a7b8c9d",
      username: "ben_okoye",
      email: "ben@example.com",
      display_name: "Ben Okoye",
      bio: "Building things nobody asked for. Occasionally they work.",
      created_at: "2026-02-03T14:45:10Z",
    },
    {
      id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
      username: "mira_k",
      email: "mira@example.com",
      display_name: "Mira Kowalski",
      bio: "Infra by day, sourdough by night. Kubernetes hater.",
      created_at: "2026-03-22T18:20:00Z",
    },
    {
      id: "f0e1d2c3-b4a5-4968-7c6d-5e4f3a2b1c0d",
      username: "jonas_dev",
      email: "jonas@example.com",
      display_name: "Jonas Lindqvist",
      bio: "Functional programming enthusiast. Yes, I write Go in a trench coat.",
      created_at: "2026-04-08T11:05:47Z",
    },
    {
      id: "8d7c6b5a-4e3f-4291-a8b7-c6d5e4f3a2b1",
      username: "priya_r",
      email: "priya@example.com",
      display_name: "Priya Raman",
      bio: "Frontend. CSS is my enemy and my friend. Mostly enemy.",
      created_at: "2026-05-19T08:30:12Z",
    },
  ],

  posts: [
    {
      id: "aa11bb22-cc33-4d44-8e55-ff66aa77bb88",
      user_id: "9c4e0b3a-1f2d-4a5e-8b7c-3d1e2f4a5b6c",
      title: "Postgres indexes are magic",
      content:
        "Added a single composite index and my query went from 4 seconds to 12ms. I will never understand databases and I am at peace with that.",
      created_at: "2026-06-01T10:15:00Z",
      updated_at: "2026-06-01T10:15:00Z",
      deleted_at: null,
    },
    {
      id: "bb22cc33-dd44-4e55-8f66-aa77bb88cc99",
      user_id: "5b8a7c6d-2e3f-4b1a-9c0d-4e5f6a7b8c9d",
      title: "why does my terminal do this",
      content:
        "Vim opened a .log file and now my terminal is full of hex codes. Ctrl+C does nothing. I have become one with the escape sequences.",
      created_at: "2026-06-02T22:47:33Z",
      updated_at: "2026-06-02T22:47:33Z",
      deleted_at: null,
    },
    {
      id: "cc33dd44-ee55-4f66-8a77-bb88cc99dd00",
      user_id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
      title: "Migrating a 300GB database",
      content:
        "Lesson learned: always test your migration on prod-sized data. Never on a 500 row test table. Found this out the hard way at 3am.",
      created_at: "2026-06-04T03:12:08Z",
      updated_at: "2026-06-04T03:12:08Z",
      deleted_at: null,
    },
    {
      id: "dd44ee55-ff66-4a77-8b88-cc99dd00ee11",
      user_id: "f0e1d2c3-b4a5-4968-7c6d-5e4f3a2b1c0d",
      title: "Go's error handling is fine actually",
      content:
        "Hot take: if err != nil is not a problem. Explicit is better than clever. Fight me in the replies.",
      created_at: "2026-06-05T14:55:21Z",
      updated_at: "2026-06-05T15:10:02Z",
      deleted_at: null,
    },
    {
      id: "ee55ff66-aa77-4b88-8c99-dd00ee11ff22",
      user_id: "8d7c6b5a-4e3f-4291-a8b7-c6d5e4f3a2b1",
      title: "tailwind saved my life",
      content:
        "Spent 3 hours writing custom CSS. Gave up. Rewrote it in Tailwind in 20 minutes. It looks better. I'm not okay.",
      created_at: "2026-06-07T19:22:45Z",
      updated_at: "2026-06-07T19:22:45Z",
      deleted_at: null,
    },
    {
      id: "ff66aa77-bb88-4c99-8d00-ee11ff22aa33",
      user_id: "9c4e0b3a-1f2d-4a5e-8b7c-3d1e2f4a5b6c",
      title: "Redis is not a database",
      content:
        "Please stop storing everything in Redis. It's not a database. It's a cache. It will lose your data. I promise.",
      created_at: "2026-06-09T07:41:11Z",
      updated_at: "2026-06-09T07:41:11Z",
      deleted_at: null,
    },
    {
      id: "aa77bb88-cc99-4d00-8e11-ff22aa33bb44",
      user_id: "5b8a7c6d-2e3f-4b1a-9c0d-4e5f6a7b8c9d",
      title: "the bug was a typo",
      content:
        "Spent 4 hours debugging. It was a typo. It is always a typo. I am going to write my variable names with a spell checker from now on.",
      created_at: "2026-06-11T23:59:59Z",
      updated_at: "2026-06-11T23:59:59Z",
      deleted_at: null,
    },
    {
      id: "bb88cc99-dd00-4e11-8f22-aa33bb44cc55",
      user_id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
      title: "kubernetes yaml",
      content:
        "The other day I wrote 200 lines of YAML to run a container that just prints 'hello'. My laptop was very quiet and I felt nothing.",
      created_at: "2026-06-13T11:14:29Z",
      updated_at: "2026-06-13T11:14:29Z",
      deleted_at: null,
    },
    {
      id: "cc99dd00-ee11-4f22-8a33-bb44cc55dd66",
      user_id: "f0e1d2c3-b4a5-4968-7c6d-5e4f3a2b1c0d",
      title: "monads are just burritos",
      content:
        "Actually they're not. But I don't want to explain why. If you know, you know. If you don't, you're probably fine.",
      created_at: "2026-06-15T16:03:47Z",
      updated_at: "2026-06-15T16:03:47Z",
      deleted_at: null,
    },
    {
      id: "dd00ee11-ff22-4a33-8b44-cc55dd66ee77",
      user_id: "8d7c6b5a-4e3f-4291-a8b7-c6d5e4f3a2b1",
      title: "React 19 broke my brain",
      content:
        "Every version of React changes how I'm supposed to think about state. I'm just going to use plain HTML and jQuery. Don't look at me.",
      created_at: "2026-06-17T09:08:14Z",
      updated_at: "2026-06-17T09:08:14Z",
      deleted_at: null,
    },
    {
      id: "ee11ff22-aa33-4b44-8c55-dd66ee77ff88",
      user_id: "9c4e0b3a-1f2d-4a5e-8b7c-3d1e2f4a5b6c",
      title: "backend is easy actually",
      content:
        "Said the frontend developer before discovering CORS, cookies, HTTPS, rate limiting, connection pooling, and race conditions.",
      created_at: "2026-06-19T20:11:56Z",
      updated_at: "2026-06-19T20:11:56Z",
      deleted_at: null,
    },
    {
      id: "ff22aa33-bb44-4c55-8d66-ee77ff88aa99",
      user_id: "5b8a7c6d-2e3f-4b1a-9c0d-4e5f6a7b8c9d",
      title: "my first blog post",
      content:
        "Hello world. This is my first post. I have no idea what I'm doing. Please be kind.",
      created_at: "2026-06-21T12:00:00Z",
      updated_at: "2026-06-21T12:00:00Z",
      deleted_at: null,
    },
    {
      id: "aa33bb44-cc55-4d66-8e77-ff88aa99bb00",
      user_id: "1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d",
      title: "docker compose is a lifestyle",
      content:
        "I have 47 services in my dev compose file and half of them are things I started once and forgot about. It's fine. Everything's fine.",
      created_at: "2026-06-23T08:45:33Z",
      updated_at: "2026-06-23T08:45:33Z",
      deleted_at: null,
    },
    {
      id: "bb44cc55-dd66-4e77-8f88-aa99bb00cc11",
      user_id: "f0e1d2c3-b4a5-4968-7c6d-5e4f3a2b1c0d",
      title: "the future of programming",
      content:
        "In 10 years we'll all just be writing prompts to an AI that generates code we can't read that runs on infrastructure we don't understand. Wait, we already do that.",
      created_at: "2026-06-25T17:23:09Z",
      updated_at: "2026-06-25T17:23:09Z",
      deleted_at: null,
    },
    {
      id: "cc55dd66-ee77-4f88-8a99-bb00cc11dd22",
      user_id: "8d7c6b5a-4e3f-4291-a8b7-c6d5e4f3a2b1",
      title: "cats are better than tabs",
      content:
        "Change my mind. Actually don't. I don't want to have this conversation again.",
      created_at: "2026-06-27T13:16:41Z",
      updated_at: "2026-06-27T13:16:41Z",
      deleted_at: null,
    },
  ],
};

export const GetFeed = () => {
  return seedData.posts
}
