import AnimatedText from "@/component/AnimatedText";
import Experience from "@/component/Experience/Experience";
import SEO from "@/component/SEO";

export default function Home() {
	return (
		<main className="px-32 py-8 w-full h-full bg-light">
			<SEO 
				title="Md Abdul Halim Rafi"
				type="website"
			/>
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

			<Experience />
		</main>
	)
}
