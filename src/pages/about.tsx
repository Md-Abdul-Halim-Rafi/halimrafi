import AnimatedText from "@/component/AnimatedText";

export default function Home() {
	return (
		<main className="px-32 py-8 w-full h-full bg-light">
			<AnimatedText
				text="Passion Fuels Purpose!"
				className="!text-8xl !text-left xl:!text-8xl font-black lg:!text-6xl md:!text-5xl sm:!text-3xl"
			/>
		</main>
	)
}
