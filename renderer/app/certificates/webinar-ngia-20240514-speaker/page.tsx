'use client';

/* * */

import { A4Wrapper } from '@/components/A4Wrapper';
import { useSearchParams } from 'next/navigation';

import BackgroundImage from './background.svg';
import styles from './styles.module.css';

/* * */

export default function Page() {
	//

	//
	// A. Setup variables

	const searchParams = useSearchParams();
	const participantName = searchParams.get('name') || 'N/A';
	const participantCode = searchParams.get('code') || 'ERROR';

	//
	// B. Render components

	return (
		<A4Wrapper backgroundImageSrc={BackgroundImage}>
			<div className={styles.background}>
				<h1 className={styles.heading}>Certificado</h1>
				<p className={styles.name}>{participantName}</p>
				<p className={styles.text}>foi palestrante no Webinar Hemorragia Uterina Anormal na Adolescência, organizado pelo Núcleo de Ginecologia da Infância e Adolescência da SPG, no dia 14 de Maio de 2024.</p>
				<p className={styles.signature}>Academia SPG</p>
			</div>
			<span className={styles.code}>#{participantCode}</span>
		</A4Wrapper>
	);

	//
}
