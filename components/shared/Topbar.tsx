import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <h1 className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="xt-heading3-bold text-light-1 mx-xs:hidden"> Threads</p>
      </Link>
    </h1>
  );
}

export default Topbar;
