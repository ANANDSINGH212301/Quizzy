import axios from 'axios';
import { cookies } from 'next/headers';

const STRAPI_ENDPOINT = process.env.STRAPI_ENDPOINT || 'https://api.dmpreneur.com';

export async function POST(request: Request) {
  console.log('=== Register API called ===');
   
  try {
    const body = await request.json();
    const { username, email, password } = body;
    
    console.log('Registration attempt for:', { username, email });

    const response = await axios.post(`${STRAPI_ENDPOINT}/api/auth/local/register`, {
      username,
      email,
      password,
    });

    const { jwt, user } = response.data;
    console.log('Strapi registration successful for user:', user.username);

    // Set token cookie using Next.js cookies API
    const cookieStore = await cookies();
    cookieStore.set('token', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    console.log('Registration cookie set successfully');

    return new Response(
      JSON.stringify({ user, jwt }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Registration API error:', error?.response?.data || error.message);
    return new Response(
      JSON.stringify({
        message: error?.response?.data?.error?.message || 'Registration failed',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function GET() {
  return new Response('Method Not Allowed', { status: 405 });
} 