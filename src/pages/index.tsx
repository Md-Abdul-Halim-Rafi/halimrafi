import AnimatedText from "@/component/AnimatedText";

export default function Home() {
	return (
		<main className="container px-32 py-8 w-full h-full bg-light">
			<p className="text-4xl font-semibold">
				Hi, I am
			</p>
			<AnimatedText
				text="Md Abdul Halim Rafi"
				className="!text-8xl !text-left xl:!text-8xl font-black lg:!text-6xl md:!text-5xl sm:!text-3xl"
			/>
			<h2 className="text-2xl font-semibold">
				Driven individual with a passion for technology and entrepreneurship
			</h2>
		</main>
	)
}
