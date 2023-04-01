import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

import HomeLayout from "@/layout/HomeLayout";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter"
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${inter.variable} font-inter bg-light w-full min-h-screen`}>
			<HomeLayout>
				<Component {...pageProps} />
			</HomeLayout>
		</main>
	)
}
