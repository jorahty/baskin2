import Link from 'next/link';
import Logo from '@/components/logo';
import UserMenu from '@/components/user/menu';

export default function Navbar() {
  return (
    <section className="py-5 px-7 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <p>Search for products...</p>

      <UserMenu />
    </section>
  );
}
