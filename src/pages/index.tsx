import { Lexend } from "next/font/google";
import Home from "./home";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],

const lexend = Lexend({
  weight: "400",
  subsets: ["latin"],
});
export default function Index() {
  return (
    <div className={`${lexend.className} w-screen min-h-screen`}>
      <main className="w-screen max-w-screen">
        <Home />
      </main>
    </div>
  );
}
