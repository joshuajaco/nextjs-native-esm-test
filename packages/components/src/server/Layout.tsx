import type { ReactNode } from "react";
import { Navbar } from "../client/Navbar.js";
import { Button } from "../client.js";
import { t } from "#i18n";

export function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Button>layout</Button>
        {t()}
        {children}
      </body>
    </html>
  );
}
