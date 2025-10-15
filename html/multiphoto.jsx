
export default function Home() {
	return (
		<picture>
			<source media="(min-width: 767.98px)" srcSet="../img/men-380.png" />
			<source media="(min-width: 374.98px)" srcSet="../img/men-124.png" />
			<img
				src="../img/men-100.png"
				alt="photo-men"
				style={{
					minWidth: "100px", // Для 320px
					width: "100%",
					height: "auto",
				}}
			/>
		</picture>
	);
}