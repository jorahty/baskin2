import Image from 'next/image';

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="grid gap-5 grid-cols-1 min-[520px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map(({ id, title, price, images }) => {
        const src = `https://smgaxvzzaljxhpqpejww.supabase.co/storage/v1/object/public/product_images/${images[0]}.jpeg`;

        return (
          <div key={id} className="flex flex-col gap-2">
            <div className="rounded-xl overflow-hidden relative aspect-[8/9]">
              <Image
                className="transition-all hover:scale-105 object-cover"
                src={src}
                alt={title}
                fill
              />
            </div>

            <div className="flex gap-4">
              <div>[avatar]</div>
              <div>
                <p>{price}</p>
                <p>{title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
