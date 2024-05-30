import Image from 'next/image';
import { createClient } from '@/supabase/server';
import Navbar from '@/components/navbar';

export default async function ProductPage({ params }: { params: { product: string } }) {
  const supabase = createClient();

  const product = (await supabase.from('products').select().eq('id', params.product).single())
    .data!;

  const src = `https://smgaxvzzaljxhpqpejww.supabase.co/storage/v1/object/public/product_images/${product.images[0]}.jpeg`;

  return (
    <>
      <div className="bg-background fixed w-full z-10">
        <Navbar />
      </div>
      <main className="px-8 pt-32 flex flex-col gap-4">
        <p>under construction ...</p>
        <p>updated May 30 2024 12:19 AM PST</p>
        <div className="max-w-md rounded-xl overflow-hidden relative aspect-square">
          <Image
            priority
            className="object-cover"
            src={src}
            alt={product.title}
            fill
            sizes="80vw"
          />
        </div>
      </main>
    </>
  );
}
