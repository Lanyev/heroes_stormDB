CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "nick_name" varchar
);

CREATE TABLE "heroes" (
  "id" serial PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "quests" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "description" text
);

CREATE TABLE "damage" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "hero_id" int,
  "damage" int
);

CREATE TABLE "tanked" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "hero_id" int,
  "tanked" int
);

CREATE TABLE "healed" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "hero_id" int,
  "healed" int
);

CREATE TABLE "quests_users" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "quest_id" int
);

CREATE TABLE "heroes_users" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "hero_id" int
);

CREATE TABLE "heroes_quests" (
  "id" serial PRIMARY KEY,
  "hero_id" int,
  "quest_id" int
);

ALTER TABLE "damage" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "damage" ADD FOREIGN KEY ("hero_id") REFERENCES "heroes" ("id");

ALTER TABLE "tanked" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "tanked" ADD FOREIGN KEY ("hero_id") REFERENCES "heroes" ("id");

ALTER TABLE "healed" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "healed" ADD FOREIGN KEY ("hero_id") REFERENCES "heroes" ("id");

ALTER TABLE "quests_users" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "quests_users" ADD FOREIGN KEY ("quest_id") REFERENCES "quests" ("id");

ALTER TABLE "heroes_users" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "heroes_users" ADD FOREIGN KEY ("hero_id") REFERENCES "heroes" ("id");

ALTER TABLE "heroes_quests" ADD FOREIGN KEY ("hero_id") REFERENCES "heroes" ("id");

ALTER TABLE "heroes_quests" ADD FOREIGN KEY ("quest_id") REFERENCES "quests" ("id");
