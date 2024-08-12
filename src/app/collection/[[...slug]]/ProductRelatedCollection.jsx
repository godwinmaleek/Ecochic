import Product from "@/app/components/product";
import CollectionGrid from "@/app/components/shopCollection/components/grid";

export default function ProductRelatedCollection({
  setTrackerAnimation,
  relatedCollection = [],
}) {
  return (
    <div className="mt-16">
      <h2 className="headline-md mb-14">shop related pieces</h2>
      <CollectionGrid>
        {relatedCollection.map((product, key) => {
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
