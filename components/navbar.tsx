import Logo from '@/components/logo';
import UserSheet from '@/components/user/sheet';
import Search from '@/components/search';
import { ThemeDropdown } from '@/components/theme/theme-dropdown';

export default function Navbar() {
  return (
    <div className="py-5 px-7 flex justify-between items-center gap-4">
      <Logo />

      <Search />

      <div className="flex gap-4">
        <ThemeDropdown />
        <UserSheet />
      </div>
    </div>
  );
}
