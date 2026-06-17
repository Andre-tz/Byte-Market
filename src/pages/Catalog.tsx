import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/product/ProductGrid";

//este componente renderizara el catalogo inicial
const Catalog = () => {
  const { products, loading } = useProducts();

  return (
    <main className="mx-auto w-[min(1200px,94%)] space-y-6 py-8">
        <ProductGrid
            arrayProduct={ products }
            loading= { loading }
        />
    </main>
  );
};

export default Catalog;
