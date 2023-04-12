import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

import HomeLayout from "@/layout/HomeLayout";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className="font-inter bg-light w-full min-h-screen">
			<HomeLayout>
				<Component {...pageProps} />
			</HomeLayout>
		</main>
	)
}
