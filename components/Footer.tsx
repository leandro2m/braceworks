import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer text-brand-footer-text">
      <div className="mx-auto max-w-content px-4 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/logo-icon.png" alt="" width={24} height={24} className="h-6 w-6" />
            <p className="text-sm text-brand-footer-muted">
              © {year} BRACEWorks Consulting LLC. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-brand-footer-muted hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-brand-footer-muted hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
