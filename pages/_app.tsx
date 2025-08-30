import type { AppProps } from 'next/app';
import '../styles/globals.css';

/**
 * ملف مستوى التطبيق العام الذي يحقن CSS ويحتفظ بالهيكل العام.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
