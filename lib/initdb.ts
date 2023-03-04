import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL ?? "", {
  ssl: true,
}); // will use psql environment variables

export default sql;
