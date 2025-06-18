import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
	images,
	className,
}: {
	images: string[]
	className?: string
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const scrollerRef = React.useRef<HTMLUListElement>(null)

	useEffect(() => {
		addAnimation()
	}, [])
	const [start, setStart] = useState(false)
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			setStart(true)
		}
	}

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
					start && 'animate-scroll',
				)}
			>
				{images.map((image, index) => (
					<li
						className='relative w-[350px] max-w-full shrink-0 flex items-center justify-center'
						key={index}
					>
						<img
							src={image}
							alt={`Image ${index + 1}`}
							className='w-[14rem] h-auto rounded-lg object-cover'
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
