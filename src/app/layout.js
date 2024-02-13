import { Lato } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/header/Navbar';

const lato = Lato({
    weight: ['100', '300', '400', '900'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'My App',
    description: '',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={lato.className}>
            <Providers>
                <body>
                    <Navbar />
                    {children}
                </body>
            </Providers>
        </html>
    );
}
