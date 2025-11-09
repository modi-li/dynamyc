import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
import "./globals.css";

// const outfit = Outfit({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Dynamyc",
    description: "AI Consulting Platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            // className={outfit.className}
            >
                {children}
            </body>
        </html>
    );
}
