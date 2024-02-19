import { Lato } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import MainNavbar from '@/components/header/mainNavbar/MainNavbar';
import Sidebar from '@/components/sidebar/Sidebar';
import StoreProvider from './StoreProvider';

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
                <StoreProvider>
                    <body className="flex min-h-screen">
                        <div className="flex flex-col w-full">
                            <MainNavbar />
                            <div className="flex flex-1 relative">
                                <Sidebar />
                                <main className="flex-1 bg-[#fafbff] mt-16">
                                    {children}
                                </main>
                            </div>
                        </div>
                    </body>
                </StoreProvider>
            </Providers>
        </html>
    );
}
