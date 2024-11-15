"use client";

import { t } from "@next-esm/next/i18n";

export function Client() {
  return <div>client: {t()}</div>;
}
