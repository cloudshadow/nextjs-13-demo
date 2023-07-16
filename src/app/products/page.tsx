'use client';
import { useSession } from 'next-auth/react';
// export default function Products() {
//   const { data: session } = useSession();
//   console.log('session:===========', session);
//   const { user } = session || {};
//   console.log('user:===========', user);
//   // return user ? <div>authed Product</div> : <div>Product</div>;
//   return <>11111</>;
// }
const Products = () => {
  const { data: session } = useSession();
  console.log('session:===========', session);
  const { user } = session || {};
  console.log('user:===========', user);
  // return user ? <div>authed Product</div> : <div>Product</div>;
  return <div>11111</div>;
};
export default Products;
