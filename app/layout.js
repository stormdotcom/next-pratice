export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Your Page Title</title>
                <meta name="description" content="Your page description" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                [header]
                {children}
                [footer]
            </body>
        </html>
    )
}