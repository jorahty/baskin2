import Image from 'next/image';

export default function ProductDetails({ product }: any) {
  const src = `https://smgaxvzzaljxhpqpejww.supabase.co/storage/v1/object/public/product_images/${product.images[0]}.jpeg`;

  return (
    <div>
      <div className="max-w-md rounded-xl overflow-hidden relative aspect-square">
        <Image priority className="object-cover" src={src} alt={product.title} fill sizes="80vw" />
      </div>
    </div>
  );
}
