import { Didact_Gothic } from "next/font/google";
import Home from "./home";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],

// const lexend = Lexend({
//   weight: "400",
//   subsets: ["latin"],
// });
const poppins = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
});
export default function Index() {
  return (
    <div className={`${poppins.className} w-full min-h-screen`}>
      <main className="w-full max-w-screen">
        <Home />
      </main>
    </div>
  );
}
