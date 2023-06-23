import AnimatedText from "@/component/AnimatedText";
import Experience from "@/component/Experience/Experience";
import SEO from "@/component/SEO";
import Image from "next/image";

export default function Home() {
	return (
		<main className="px-32 py-8 w-full h-full bg-white">
			<SEO
				title="Md Abdul Halim Rafi"
				type="website"
			/>
			<div className="flex items-center gap-1">
				<p className="text-4xl font-semibold text-dark">
					Hi, I am
				</p>
				<Image
					src="/avatar/hello-rafi.png"
					alt="Hello Rafi"
					width={30}
					height={30}
					placeholder="blur"
					blurDataURL="/avatar/hello-rafi.png"
					loading="lazy"
				/>
			</div>
			<AnimatedText
				text="Md Abdul Halim Rafi"
				className="!text-8xl !text-left xl:!text-8xl font-black lg:!text-6xl md:!text-5xl sm:!text-3xl"
			/>
			<h2 className="text-2xl font-normal text-dark">
				Driven individual with a passion for technology and entrepreneurship
			</h2>

			<Experience />
		</main>
	)
}
