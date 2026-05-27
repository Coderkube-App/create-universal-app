import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Universal Next.js App',
  description: 'Scaffolded with create-universal-app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
