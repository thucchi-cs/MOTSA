import { neon } from "@neondatabase/serverless";
export async function getData(abbr) {
    const sql = neon(process.env.DATABASE_URL);
    const res = await sql`SELECT * FROM officers WHERE abbr='president'`;
    console.log(res);
    return res[0].name;
};