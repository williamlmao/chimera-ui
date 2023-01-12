import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="fixed w-full top-0 bottom-0 overflow-x-auto">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
