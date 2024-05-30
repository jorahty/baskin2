'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/supabase/client';
import ProductGrid from '@/components/product/grid';

export default function SavedProducts() {
  const supabase = createClient();

  const [savedProducts, setSavedProducts] = useState<any[]>([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('savedProducts') || '[]');

    const fetchSavedProducts = async () => {
      const products = (
        await supabase
          .from('products')
          .select('id, title, price, user_id, date, images')
          .in('id', savedIds)
      ).data!;

      setSavedProducts(products);
    };

    if (savedIds.length > 0) fetchSavedProducts();
  }, []);

  return savedProducts.length > 0 ? (
    <ProductGrid products={savedProducts} />
  ) : (
    <div className="h-full flex items-center justify-center">
      <p className="text-lg font-medium opacity-80">You do not have any saved products.</p>
    </div>
  );
}
