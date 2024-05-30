import Image from 'next/image';
import UserPlaceholder from '@/components/user/placeholder';
import ProductToggleSave from '@/components/product/toggle-save';

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="grid gap-x-5 gap-y-10 grid-cols-1 min-[520px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map(({ id, title, price, images }, index) => {
        const src = `https://smgaxvzzaljxhpqpejww.supabase.co/storage/v1/object/public/product_images/${images[0]}.jpeg`;

        return (
          <div key={id} className="flex flex-col gap-3 relative">
            <div className="rounded-xl overflow-hidden relative aspect-[8/9]">
              <Image
                priority={index === 0}
                className="transition-all hover:scale-105 object-cover"
                src={src}
                alt={title}
                fill
                sizes="80vw"
              />
            </div>
            <div className="absolute top-3 right-3">
              <ProductToggleSave productId={id} />
            </div>

            <div className="flex gap-4">
              <UserPlaceholder />
              <div>
                <p className="font-semibold">${price.toLocaleString()}</p>
                <p>{title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
