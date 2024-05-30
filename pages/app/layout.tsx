import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/base/Header';
import Footer from '@/components/base/Footer';

export const metadata: Metadata = {
    title: 'zuk246',
    description: `zuk246のポートフォリオサイト`,
    metadataBase: new URL('https://zuk246.net'),
    openGraph: {
        locale: 'ja_JP',
        type: 'website',
        url: 'https://zuk246.net',
        title: 'zuk246',
        description: `zuk246のポートフォリオサイト`,
        siteName: 'zuk246',
    },
    twitter: {
        creator: '@zuk246',
        site: '@zuk246',
        card: 'summary',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ja'>
            <body className='font-noto'>
                <Providers>
                    <Header />
                    <main className='max-w-2xl mx-auto py-12 text-default-800 px-4'>
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
