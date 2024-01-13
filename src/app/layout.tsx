/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work
 * is licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Header from '../components/header';
import '../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
