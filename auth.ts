import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
const bcrypt = require('bcrypt');
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { authConfig } from './auth.config';
import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432,
  database: 'postgres',
  max: 5,
  connectionTimeoutMillis: 20000,
  idleTimeoutMillis: 20000,
  allowExitOnIdle: true,
  ssl: {
    rejectUnauthorized: false
  }
})


async function getUser(email: string): Promise<User | undefined> {
  try {
    console.log(pool);
    const client = await pool.connect();
    const user = await client.query(`SELECT * FROM users WHERE email='${email}'`)
    console.log(user);
    client.release(true);
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log(`password match: ${passwordsMatch} ${user}`);
          
          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
