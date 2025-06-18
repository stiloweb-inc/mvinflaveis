import {
	DollarSignIcon,
	HeartPlusIcon,
	type LucideIcon,
	ZapIcon,
} from 'lucide-react'

export type HighlightData = {
	label: string
	icon: LucideIcon
}

interface HighlightProps {
	data: HighlightData[]
}

export function Highlight({ data }: HighlightProps) {
	return (
		<div className='flex items-center justify-center w-full h-18 bg-primary'>
			<div className='flex flex-wrap gap-y-4 justify-center gap-x-16 px-8'>
				{data.map((item, i) => (
					<div
						key={i}
						className='flex items-center gap-2 justify-center'
					>
						{item.icon && (
							<item.icon className='size-5 text-white' />
						)}
						<span className='text-white text-sm'>{item.label}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default function HighlightsSection() {
	const highlightData: HighlightData[] = [
		{
			label: 'Entrega em todo o território nacional',
			icon: ZapIcon,
		},
		{
			label: 'Suporte em todo o processo',
			icon: DollarSignIcon,
		},
		{
			label: 'Condições especiais de pagamento',
			icon: HeartPlusIcon,
		},
	]

	return <Highlight data={highlightData} />
}
