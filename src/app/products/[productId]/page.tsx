export default async function Page({ params }: { params: { productId: number } }) {
  const product = await fetch('https://.../product', { cache: 'no-store' }).then((res) => res.json());
  // also can set time for cache
  // Initiate both requests in parallel
  // const cart = await fetch('https://.../cart', { next: { revalidate: 10 } }).then((res) => res.json());

  // Wait for the promises to resolve
  // const [product, cart] = await Promise.all([product, cart])
  return <div>My product: {product.productId}</div>;
}
