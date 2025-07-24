import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "@/components/shared/Layout";
import '../../app/globals.css'

// 1. Setup the stable Inter font
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "E-Commerce",
    description: "E-Commerce ",
};

export default function StoreLayout({ children }) {
    return (
        <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
                <div className={`min-h-screen  font-sans antialiased ${fontSans.variable}`}>
                    <p>Store e-commerce mai</p>
                </div>
        </ClerkProvider>
    );
}
