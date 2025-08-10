import { cookies } from 'next/headers';

export async function POST() {
  console.log('=== Logout API called ===');
  
  try {
    const cookieStore = await cookies();
    
    // Check if token exists before deleting
    const token = cookieStore.get('token');
    if (token) {
      console.log('Token found, clearing it...');
    } else {
      console.log('No token found to clear');
    }
    
    // Clear the token cookie
    cookieStore.delete('token');
    console.log('Token cookie cleared successfully');

    return new Response(
      JSON.stringify({ message: 'Logged out successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Logout API error:', error);
    return new Response(
      JSON.stringify({ message: 'Error during logout' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function GET() {
  return new Response('Method Not Allowed', { status: 405 });
} 