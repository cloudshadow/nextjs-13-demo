import { IProduct } from './type';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const products: IProduct[] = [
    {
      id: '1',
      name: 'product 1',
    },
    {
      id: '2',
      name: 'product 2',
    },
    {
      id: '3',
      name: 'product 3',
    },
    {
      id: '4',
      name: 'product 4',
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <Link key="login" href={`/login`}>
          Login
        </Link>
        <Link key="products" href={`/products`}>
          products
        </Link>
        <Link key="cloud" href={`/cloud`}>
          cloud
        </Link>
      </div>
      {/* <div className={styles.description}>
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            {product.name}
          </Link>
        ))}
      </div> */}

      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
    </div>
  );
}
