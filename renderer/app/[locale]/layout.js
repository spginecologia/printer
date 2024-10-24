/* * */

import { availableLocales } from '@/translations/config';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';

/* * */

export default function Layout({ children, params: { locale } }) {
	//

	if (!availableLocales.includes(locale)) notFound();

	const messages = useMessages();

	return (
		<NextIntlClientProvider
			locale={locale}
			messages={messages}
			now={Date.now()}
			timeZone="Europe/Lisbon"
			formats={{
				number: {
					currency_euro: {
						currency: 'EUR',
						currencySign: 'standard',
						style: 'currency',
					},
					kilometers: {
						maximumFractionDigits: 2,
						style: 'unit',
						unit: 'kilometer',
						unitDisplay: 'short',
					},
					percentage: {
						maximumFractionDigits: 2,
						style: 'unit',
						unit: 'percent',
					},
				},
			}}
		>
			{children}
		</NextIntlClientProvider>
	);

	//
}
