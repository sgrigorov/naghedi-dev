import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAGHEDI Immigration Inc",
  description:
    "NAGHEDI Immigration Inc. is a Calgary-based company providing specialized Canadian immigration and citizenship services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://images.squarespace-cdn.com" />
        <link rel="preconnect" href="https://static1.squarespace.com" />
        <link rel="preconnect" href="https://use.typekit.net" />
        <link
          rel="stylesheet"
          href="https://static1.squarespace.com/static/versioned-site-css/6593abc53b38c97cdaf5a338/56/5c5a519771c10ba3470d8101/6593abc53b38c97cdaf5a343/1597/site.css"
        />
        <link
          rel="stylesheet"
          href="https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/versioned-assets/1734634171682-RZF6JR6GWSGG409XDSTH/static.css"
        />
        <link rel="stylesheet" href="/css/override.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://use.typekit.net/ik/dx2W-9ohBe9X7GGJ0051O-H76Wpb1j_sonOCDFGzlabfeCJgfFHN4UJLFRbh52jhWDju5QFyjcwuwhJD5ewoFhFqjAjujQwD5gGMJ6lzS1gGZWmDOWgkdkJZdcmuZPuGjABDOAikdas8ShClZe8DSeUypPGHf50rMsMMeMb6MKGHf5crMsMMeMS6MKGHf57rMsMMeMt6MKGHfw-XMyMgeMb6MKGHfwKXMyMgeM96MKGHfwkXMyMgeMS6MKGHfwpXMyMgeMt6MKGHfwcXMyMgeMv6MKGHfwhXMyMgegI6MTMg_5AyCbj.js"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "try{Typekit.load();}catch(e){}",
          }}
        />
      </head>
      <body className="primary-button-style-solid primary-button-shape-pill secondary-button-style-solid secondary-button-shape-pill tertiary-button-style-solid tertiary-button-shape-pill form-field-style-solid form-field-shape-square header-overlay-alignment-center header-width-inset tweak-transparent-header tweak-fixed-header-style-basic tweak-global-animations-animation-style-fade tweak-global-animations-animation-type-none collection-type-page collection-layout-default homepage mobile-style-available sqs-seven-one">
        <div id="siteWrapper" className="clearfix site-wrapper">
          {children}
        </div>
        <script src="/js/main.js" defer />
      </body>
    </html>
  );
}
