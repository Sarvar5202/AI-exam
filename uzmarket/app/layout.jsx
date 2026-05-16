import React from 'react';

export const metadata = {
  title: 'Uzmarket',
  description: 'Local test layout'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
