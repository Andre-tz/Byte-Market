import useProducts from "../../hooks/useProducts";
import CardProductSkeleton from "../CardProductSkeleton";
import ProductCards from "../ProductCards";

//este componente renderizara el catalogo inicial
const Catalog = () => {
  const { products, loading } = useProducts();

  return (
    <main className="mx-auto w-[min(1200px,94%)] space-y-6 py-8">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                { loading?
                Array.from( { length: 8 } ).map( (_, i ) =>( <CardProductSkeleton key={ i } />  ))
                :
                products.map((product) => (
                    <ProductCards
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        images={product.images}
                        stock={ product.stock }
                    />
                )) 
                }
            
            </div>
        </section>
    </main>
  );
};

export default Catalog;
