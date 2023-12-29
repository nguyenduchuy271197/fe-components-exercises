import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function BackToHome() {
  return (
    <div className="fixed bottom-8 left-8">
      <Link href="/" className="inline-flex items-center gap-2">
        <MoveLeft />
        Back to Home
      </Link>
    </div>
  );
}
