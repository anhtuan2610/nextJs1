"use client";

import { useParams } from "next/navigation";
import { listProducts } from "../page";

export default function DetailProductPage() {
  const params = useParams();
  const productDetail = listProducts.find(
    (p) => p.id === Number(params.productId)
  );
  return (
    <div>
      <div>id: {productDetail?.id}</div>
      <div>product name: {productDetail?.name}</div>
      <div>product price: {productDetail?.price}</div>
    </div>
  );
}
