import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
	return (
		<section id="about">
			<BentoGrid className="w-full py-20 bg-black-100">
				{gridItems.map((item) => (
					<BentoGridItem
						key={item.id}
						title={item.title}
						description={item.description}
					/>
				))}
			</BentoGrid>
		</section>
	);
};

export default Grid;
