export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section>
      <div className="grid grid-flow-row gap-4 grid-cols-1 min-[520px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#7772] h-40 flex items-center justify-center rounded-3xl">
            <p className="opacity-30">{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
