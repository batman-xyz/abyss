import sql from "./initdb";

export default async function insertUser({
  email,
  provider,
}: {
  email: string;
  provider: string;
}) {
  const users = await sql`
    insert into waitlist
      (email, provider, created_on)
    values
      (${email}, ${provider}, ${Date.now()})
  `;
  return users;
}
