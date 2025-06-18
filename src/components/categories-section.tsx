import {
	IconAirBalloon,
	IconBuildingBridge2,
	IconCylinder,
	IconFlag2,
	IconTent,
	IconViewportWide,
	IconZeppelin,
	IconRosetteDiscountCheck,
	IconTagsFilled,
} from '@tabler/icons-react'

export function CategoriesSection() {
	const categories = [
		{
			icon: IconViewportWide,
			label: 'Portal',
			href: '#',
			image: '/assets/images/portal.jpeg',
		},
		{
			icon: IconAirBalloon,
			label: 'Réplica',
			href: '#',
			image: '/assets/images/replica.jpeg',
		},
		{
			icon: IconZeppelin,
			label: 'Roof Top',
			href: '#',
			image: '/assets/images/rooftop.jpeg',
		},

		{
			icon: IconTent,
			label: 'Tenda',
			href: '#',
			image: '/assets/images/kits.jpeg',
		},
		{
			icon: IconCylinder,
			label: 'Totem',
			href: '#',
			image: '/assets/images/totem.jpeg',
		},
		{
			icon: IconBuildingBridge2,
			label: 'Túnel',
			href: '#',
			image: '/assets/images/tunel.jpeg',
		},
		{
			icon: IconFlag2,
			label: 'Wind',
			href: '#',
			image: '/assets/images/wind.jpeg',
		},
		{
			icon: IconRosetteDiscountCheck,
			label: 'Kits',
			href: '#',
			image: '/assets/images/kits.jpeg',
		},
	]

	return (
		<div className='flex flex-col w-full gap-4 bg-primary/5 py-8 -pb-2'>
			<div className='flex flex-col items-center justify-center w-full'>
				<div className='flex items-center justify-center text-primary mb-2'>
					<IconTagsFilled stroke={2} className='size-8' />
				</div>
				<span className='text-sm mb-2 font-medium'>
					Oferecemos as melhores soluções publicitárias em
				</span>
				<span className='text-lg font-semibold text-primary -mb-1'>
					Mídias não tradicionais de alta identificação
				</span>
				<span className='text-lg font-black text-[#de2c70]'>
					para a sua empresa, produto ou evento!
				</span>
			</div>
			<div className='col-span-4 flex items-center justify-center gap-4'>
				{categories.map((link, i) => (
					<a
						key={i}
						className='cursor-pointer text-primary hover:text-[#de2c70] hover:bg-[#de2c70]/10 rounded-lg flex flex-col gap-2 items-center justify-center size-24 bg-transparent font-medium transform text-xs hover:-translate-y-1 transition duration-400'
					>
						{link.icon && <link.icon />}
						<span className='text-sm font-semibold'>
							{link.label}
						</span>
					</a>
				))}
			</div>
		</div>
	)
}
