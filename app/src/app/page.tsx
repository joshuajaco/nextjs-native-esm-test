import { Button, Link } from "@next-esm/next/client";
import { Client } from "./Client";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Button>page</Button>
      <Client></Client>
      <Link></Link>
    </main>
  );
}
