import { CategoriesSection } from '@/components/categories-section'
import { ContactSection } from '@/components/contact-section'
import { CtaSection } from '@/components/cta-section'
import { CustomersSection } from '@/components/customers-section'
import { EventsSection } from '@/components/events'
import { HeroBannerSlider } from '@/components/hero-slider'
import HighlightsSection from '@/components/highlights'
import { NewsletterSection } from '@/components/newsletter-section'
import { SalesSection } from '@/components/sales-section'
import { Footer } from '@/components/site/footer'
import Header from '@/components/site/header'
import { Map } from '@/components/site/map'
import { WhatsAppWidget } from '@/components/site/widget'

export function Home() {
	return (
		<div className='flex flex-1 flex-col w-full antialiased'>
			<Header />
			<WhatsAppWidget />
			<HeroBannerSlider />
			<HighlightsSection />
			<CategoriesSection />
			<SalesSection />
			<ContactSection />
			<CtaSection />
			<NewsletterSection />
			<CustomersSection />
			<EventsSection />
			<Map />
			<Footer />
		</div>
	)
}
