import Header from "./header/page";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full scroll-smooth">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="A beautifully designed layout"
                />
                <title>Beautiful Layout</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
                />
            </head>
            <body
                style={{
                    background:
                        "linear-gradient(to bottom right, #4c51bf, #805ad5, #d53f8c)",
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    margin: 0,
                }}
            >
                <header
                    style={{
                        backgroundColor: "rgba(49, 46, 129, 0.9)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",

                        top: 0,
                        width: "100%",
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1200px",
                            margin: "0 auto",
                            padding: "1rem 1.5rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Header />
                    </div>
                </header>
                <main
                    style={{
                        flex: "1",
                        paddingTop: "20px",
                        maxWidth: "1200px",
                    }}
                >
                    {children}
                </main>
                <footer
                    style={{
                        backgroundColor: "rgba(49, 46, 129, 0.9)",
                        padding: "1.5rem",
                        marginTop: "auto",
                        textAlign: "center",
                        color: "#FBB6CE",
                        fontSize: "0.875rem",
                    }}
                >
                    &copy; {new Date().getFullYear()} My Vibrant App. All rights
                    reserved.
                </footer>
            </body>
        </html>
    );
}
