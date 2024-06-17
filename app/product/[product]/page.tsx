import { createClient } from '@/supabase/server';
import Navbar from '@/components/navbar';
import ProductDetails from '@/components/product/details';

export default async function ProductPage({ params }: { params: { product: string } }) {
  const supabase = createClient();

  const product = (await supabase.from('products').select().eq('id', params.product).single())
    .data!;

  return (
    <main>
      <Navbar />
      <ProductDetails product={product} />
    </main>
  );
}
