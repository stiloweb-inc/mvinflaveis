import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel'
import { ProductCard } from './product-card'

export function ProductsHighlight() {
	const products = [
		{
			title: 'Wind Banner',
			href: '#',
			image: '/wind.jpeg',
			webpImage: '/wind.jpeg',
		},
		{
			title: 'Infláveis Promocionais',
			href: '#',
			image: '/portal.jpeg',
			webpImage: '/portal.jpeg',
		},
		{
			title: 'Painéis',
			href: '#',
			image: '/totem.jpeg',
			webpImage: '/totem.jpeg',
		},
		{
			title: 'Réplicas',
			href: '#',
			image: '/replica.jpeg',
			webpImage: '/replica.jpeg',
		},
		{
			title: 'Combos',
			href: '#',
			image: '/kits.jpeg',
			webpImage: '/kits.jpeg',
		},
		{
			title: 'Boneco Interativo',
			href: '#',
			image: '/tenda-aranha.jpeg',
			webpImage: '/tenda-aranha.jpeg',
		},
	]

	return (
		<div className='flex items-center justify-center gap-4 w-2/3'>
			<Carousel>
				<CarouselContent>
					{products.map((product, i) => (
						<CarouselItem key={i} className='basis-1/3'>
							<ProductCard
								name={product.title}
								image={product.image}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
