/* * */

import Image from 'next/image';
import styles from './A4Wrapper.module.css';

/* * */

export default function A4Wrapper({ orientation = 'horizontal', backgroundImage, children }) {
  return (
    <div className={`${styles.container} ${styles[orientation]}`}>
      {backgroundImage && <Image className={styles.backgroundImage} src={backgroundImage} />}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
