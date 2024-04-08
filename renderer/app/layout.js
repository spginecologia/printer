/* * */

import '@/styles/reset.css';
import '@/styles/defaults.css';

/* * */

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xgs1heq.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
