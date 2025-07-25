import { Inter as FontSans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "@/components/shared/Layout";
// import '../../app/globals.css'

// 1. Setup the stable Inter font
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard for managing E-commerce",
};

export default function DashboardLayout({ children }) {
    return (
        <ClerkProvider signInUrl="/AdminDashboard/sign-in" signUpUrl="/AdminDashboard/sign-up">
                <div className={`min-h-screen  font-sans antialiased ${fontSans.variable}`}>
                    <Layout>{children}</Layout>
                </div>
        </ClerkProvider>
    );
}
