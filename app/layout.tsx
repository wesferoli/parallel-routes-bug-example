export default function RootLayout({ children, details }) {
    return (
        <html>
            <head />
            <body>
                {details}
                {children}
            </body>
        </html>
    );
}
