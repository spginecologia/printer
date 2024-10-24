'use client';

/* * */

import A4Wrapper from '@/components/A4Wrapper/A4Wrapper';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import styles from './CertificatesWebinarNgia20240514.module.css';
import BackgroundImage from './CertificatesWebinarNgia20240514Background.svg';

/* * */

export default function CertificatesWebinarNgia20240924Speaker() {
	//

	//
	// A. Setup variables

	const t = useTranslations('CertificatesWebinarNgia20240924Speaker');

	const searchParams = useSearchParams();
	const participantName = searchParams.get('name') || 'N/A';
	const participantCode = searchParams.get('code') || 'ERROR';

	//
	// B. Render components

	return (
		<A4Wrapper backgroundImage={BackgroundImage}>
			<div className={styles.background}>
				<h1 className={styles.heading}>{t('heading')}</h1>
				<p className={styles.name}>{participantName}</p>
				<p className={styles.text}>{t('text')}</p>
				<p className={styles.signature}>{t('signature')}</p>
			</div>
			<span className={styles.code}>#{participantCode}</span>
		</A4Wrapper>
	);

	//
}
