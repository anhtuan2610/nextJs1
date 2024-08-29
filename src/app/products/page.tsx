import Link from "next/link";
// const router = useRouter(); // phải sử dụng client , hydrate - redirect sử dụng trên server
/* <h1 onClick={() => router.push("/products/id")}>To detail</h1>  */

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const listProducts: Product[] = [
  {
    id: 1,
    name: "Product Name 1",
    price: 10,
  },
  {
    id: 2,
    name: "Product Name 2",
    price: 10,
  },
  {
    id: 3,
    name: "Product Name 3",
    price: 20,
  },
  {
    id: 4,
    name: "Product Name 4",
    price: 20,
  },
  {
    id: 5,
    name: "Product Name 5",
    price: 10,
  },
];

export default function ProductPage() {
  return (
    <div>
      {listProducts.map((p) => {
        return (
          <div className="flex gap-6">
            <Link href={`/products/${p.id}`}>
              {p.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
