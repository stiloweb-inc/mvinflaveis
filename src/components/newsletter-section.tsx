import { IconMailFilled } from '@tabler/icons-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function NewsletterSection() {
	return (
		<div className='grid grid-cols-4 w-full gap-4 p-24 bg-gradient-to-br from-primary/5 to-primary/10'>
			<div className='col-start-2 flex items-center gap-2'>
				<IconMailFilled className='size-15 text-primary' />
				<div className='flex flex-col'>
					<h1 className='text-primary text-lg font-bold'>
						Newsletter
					</h1>
					<span className='text-sm'>
						Receba nossas novidades no seu e-mail
					</span>
				</div>
			</div>
			<div className=' flex items-center justify-center gap-2 w-full h-full'>
				<Input placeholder='seu@email.com' />
				<Button>Cadastrar</Button>
			</div>
		</div>
	)
}
