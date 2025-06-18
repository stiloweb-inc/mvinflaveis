import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { ProductsHighlight } from '../components/shop/products-highlight'

export function SalesSection() {
	return (
		<div className='flex w-full flex-col items-center justify-center mb-8'>
			<Label className='font-bold text-2xl mt-8'>
				Principais Produtos
			</Label>
			<div className='flex flex-col items-center justify-center w-full p-8'>
				<ProductsHighlight />
			</div>
			<Button className='hover:scale-110 transition duration-400'>
				Ver todos
			</Button>
		</div>
	)
}
