import axios from 'axios';
import { cookies } from 'next/headers';

const STRAPI_ENDPOINT = process.env.STRAPI_ENDPOINT || 'https://api.dmpreneur.com';

export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    if (!token) {
      return new Response(
        JSON.stringify({ message: 'No token found' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Getting user profile with token');

    const response = await axios.get(`${STRAPI_ENDPOINT}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    console.log('User profile retrieved successfully');

    return new Response(
      JSON.stringify(response.data),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error getting user profile:', error?.response?.data || error.message);
    return new Response(
      JSON.stringify({
        message: 'Failed to get user profile',
        error: error?.response?.data?.error?.message || error.message,
      }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function POST() {
  return new Response('Method Not Allowed', { status: 405 });
} 