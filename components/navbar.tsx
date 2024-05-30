import Logo from './logo';

export default function Navbar() {
  return (
    <section className="bg-secondary p-4 flex justify-between items-center">
      <Logo />
      <p>Search for products...</p>
      <p>[avatar]</p>
    </section>
  );
}
