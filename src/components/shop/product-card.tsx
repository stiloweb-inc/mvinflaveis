import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'

export type ProductItem = {
	name: string
	image: string
}

export function ProductCard({ name, image }: ProductItem) {
	return (
		<Card className='hover:border-primary/30 transition ease-in'>
			<CardContent>
				<div className='flex flex-col w-full gap-4'>
					<div className='bg-white/10 w-full overflow-hidden cursor-pointer'>
						<img src={image} alt={name} className='rounded-lg' />
					</div>
					<div className='flex flex-col w-full gap-2'>
						<div className='flex items-center gap-2 w-full'>
							<Label className='text-md font-semibold'>
								{name}
							</Label>
						</div>
						<div className='w-full'>
							<Button className='w-full bg-[#de2c70] hover:bg-[#ac1f55] transition ease-in'>
								Ver mais
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
