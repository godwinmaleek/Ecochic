import Product from "@/app/components/product";
import CollectionGrid from "@/app/components/shopCollection/components/grid";
import productCollection from "../../utils/data/collection.json";

export default function ProductRelatedCollection({ setTrackerAnimation }) {
  return (
    <div className="mt-16">
      <h2 className="headline-md mb-14">shop related pieces</h2>
      <CollectionGrid>
        {productCollection.maleProduct.map((product, key) => {
          return (
            <Product
              handleMouseEnter={() => setTrackerAnimation("textHover")}
              handleMouseLeave={() => setTrackerAnimation("default")}
              key={key}
              productInfo={product}
            />
          );
        })}
      </CollectionGrid>
    </div>
  );
}
