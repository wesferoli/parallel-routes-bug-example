export default function RootLayout({ children, details }) {
    return (
        <html>
            <head />
            <body>
                {children}
                {details}
            </body>
        </html>
    );
}
