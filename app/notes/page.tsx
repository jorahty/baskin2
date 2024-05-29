import { Button } from '@/components/ui/button';
import { createClient } from '@/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from('notes').select();

  return (
    <>
      <Button>buy now</Button>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </>
  );
}
