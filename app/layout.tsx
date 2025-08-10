import type { Metadata } from "next";
import "./globals.css";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Toaster } from "react-hot-toast";

=======
import { AuthProvider } from "@/lib/AuthContext";
>>>>>>> Stashed changes
=======
import { AuthProvider } from "@/lib/AuthContext";
>>>>>>> Stashed changes

export const metadata: Metadata = {
  title: "Quizzy",
  description: "Digital Marketing Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
    </AuthProvider>
  );
}
