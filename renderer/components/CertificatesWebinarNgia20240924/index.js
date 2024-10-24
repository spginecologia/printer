'use client';

/* * */

import A4Wrapper from '@/components/A4Wrapper/A4Wrapper';
import { useSearchParams } from 'next/navigation';

import BackgroundImage from './background.svg';
import styles from './styles.module.css';

/* * */

export function CertificatesWebinarNgia20240924() {
	//

	//
	// A. Setup variables

	const searchParams = useSearchParams();
	const participantName = searchParams.get('name') || 'N/A';
	const participantCode = searchParams.get('code') || 'ERROR';

	//
	// B. Render components

	return (
		<A4Wrapper backgroundImage={BackgroundImage}>
			<div className={styles.background}>
				<h1 className={styles.heading}>Certificado de Participação</h1>
				<p className={styles.name}>{participantName}</p>
				<p className={styles.text}>participou no Webinar Síndrome do Ovário Poliquístico (SOP) na Adolescência, organizado pelo Núcleo de Ginecologia da Infância e Adolescência da SPG, no dia 24 de Setembro de 2024.</p>
				<p className={styles.signature}>Academia SPG</p>
			</div>
			<span className={styles.code}>#{participantCode}</span>
		</A4Wrapper>
	);

	//
}
