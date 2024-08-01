import Image from "next/image";
import CollectionGrid from "./components/grid";
import Button from "../button";
import Product from "../product";
import productCollection from "../../utils/data/collection.json";
import FilterDropdown from "../FilterDropdown";

export default function ShopCollection({ handleMouseEnter, handleMouseLeave }) {
  return (
    <section className=" mt-52">
      <div className="mb-16 flex justify-between">
        <h3 className="flex items-center font-300 text-[32px] gap-x-2">
          shop sustainable pieces
          <Image
            height={32}
            width={32}
            src={"/img/Sustainability-icon-sm.png"}
            alt=""
          ></Image>
        </h3>

        <div className="flex gap-x-8">
          <FilterDropdown
            buttonText={"Sort"}
            ItemList={[
              "most popular",
              "newly added",
              "Price: high to low",
              "Price: low to high",
            ]}
          />
          <FilterDropdown buttonText={"Filter"} />
        </div>
      </div>
      <CollectionGrid>
        {[...productCollection.femaleProduct, ...productCollection.maleProduct]
          .sort((a, b) => a.id - b.id)
          .map((product, key) => {
            return (
              <Product
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                key={key + product.id}
                productInfo={product}
              />
            );
          })}
      </CollectionGrid>
      <Button color={"black"} className="mt-20 mx-auto border-black">
        explore all pieces
      </Button>
    </section>
  );
}
