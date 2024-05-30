import Logo from './logo';

export default function Navbar() {
  return (
    <section className="p-4 flex justify-between items-center">
      <Logo />
      <p>Search for products...</p>
      <p>[avatar]</p>
    </section>
  );
}
