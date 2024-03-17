import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/base/Header';

export const metadata: Metadata = {
    title: 'zuk246',
    description: 'zuk246のポートフォリサイト',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ja'>
            <body>
                <Providers>
                    <Header />
                    <main className='max-w-3xl mx-auto'>{children}</main>
                </Providers>
            </body>
        </html>
    );
}
