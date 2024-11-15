"use client";

import { t } from "#i18n";
import type { ReactNode } from "react";

let count = 0;

export function Button({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <button type="button" onClick={() => console.log("hello world" + ++count)}>
      {t()}
      {children}
    </button>
  );
}
