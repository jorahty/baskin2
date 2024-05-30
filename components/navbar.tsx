import Link from 'next/link';
import Logo from '@/components/logo';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <section className="py-5 px-7 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <p>Search for products...</p>

      <Avatar>
        <AvatarFallback>J</AvatarFallback>
      </Avatar>
    </section>
  );
}
