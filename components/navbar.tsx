import Logo from '@/components/logo';
import UserMenu from '@/components/user/sheet';
import Search from '@/components/search';

export default function Navbar() {
  return (
    <div className="py-5 px-7 flex justify-between items-center gap-4">
      <Logo />

      <Search />

      <UserMenu />
    </div>
  );
}
