import data from '@/data/wind-banner-benefits.json'
import { IconCircleCheckFilled } from '@tabler/icons-react'

export function CtaSection() {
	return (
		<div className='grid grid-cols-3 w-full gap-4 p-12'>
			<div className='col-span-2 flex flex-col items-center justify-center w-full h-full '>
				<span>
					<h4 className='font-bold text-xl text-primary'>
						Porque utilizar
					</h4>
					<h4 className='font-black text-xl text-[#de2c70]'>
						Wind Banners
					</h4>
					<ul className='text-sm mt-4 space-y-2'>
						{data.windBannerBenefits.map((item, i) => (
							<li
								key={i}
								className='flex items-center gap-2 font-medium'
							>
								<IconCircleCheckFilled className='size-4 text-[#de2c70]' />
								{item.title}
							</li>
						))}
					</ul>
				</span>
			</div>
		</div>
	)
}
