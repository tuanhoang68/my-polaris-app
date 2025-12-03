import { Card, DataTable, Thumbnail } from "@shopify/polaris";
import { useSelector } from "react-redux";

export default function ProductsTable() {
  const products = useSelector((state) => state.products.list);

  const rows = products.map((p) => [
    p.id,
    p.name,
    <Thumbnail source={p.image} alt={p.name} />
  ]);

  return (
    <Card>
      <DataTable
        columnContentTypes={['text', 'text', 'text']}
        headings={['ID', 'Tên sản phẩm', 'Ảnh']}
        rows={rows}
      />
    </Card>
  );
}
