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
      <main className="w-screen max-w-screen flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Home />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
