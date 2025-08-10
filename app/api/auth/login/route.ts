import axios from "axios";
import { cookies } from "next/headers";

const STRAPI_ENDPOINT =
  process.env.STRAPI_ENDPOINT || "https://api.dmpreneur.com";

export async function POST(request: Request) {
  console.log("=== Login API called ===");

  if (!STRAPI_ENDPOINT) {
    return new Response(
      JSON.stringify({ message: "Strapi endpoint is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Parse the JSON body from the request
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "Email and password are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Login attempt for email:", email);

    const response = await axios.post(`${STRAPI_ENDPOINT}/api/auth/local`, {
      identifier: email,
      password,
    });

    const { jwt, user } = response.data;
    console.log("Strapi login successful for user:", user.username);

    // Set token cookie using Next.js cookies API
    const cookieStore = await cookies();
    cookieStore.set("token", jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    console.log("Cookie set successfully");

    return new Response(JSON.stringify({ user, jwt }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Login API error:", error?.response?.data || error.message);
    if (error?.response?.status === 400) {
      return new Response(
        JSON.stringify({
          message: "Invalid credentials",
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({
        message: error?.response?.data?.error?.message || "Invalid credentials",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
