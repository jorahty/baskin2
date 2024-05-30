import Link from 'next/link';
import Logo from './logo';

export default function Navbar() {
  return (
    <section className="py-5 px-7 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <p>Search for products...</p>
      <p>[avatar]</p>
    </section>
  );
}
