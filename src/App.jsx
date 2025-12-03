import { Routes, Route, Link } from "react-router-dom";
import { Page, Layout, Card } from "@shopify/polaris";
import FormPage from "./pages/FormPage";
import ProductsTable from "./pages/product/ProductsTable";

export default function App() {
  return (
    <Page title="My App">
      <Layout>
        <Layout.Section>
          <Card>
            <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
              <Link to="/">Trang Chủ</Link>
              <Link to="/form">Tạo Profile</Link>
              <Link to="/product-list">Sản Phẩm</Link>
            </div>
          </Card>
        </Layout.Section>
      </Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/product-list" element={<ProductsTable />} />
      </Routes>
    </Page>
  );
}

function Home() {
  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h2>Welcome to my Polaris App!</h2>
      <p>Click vào menu để mở form</p>
    </div>
  );
}
