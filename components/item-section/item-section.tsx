import { GetProductSuccessData } from "@/types/services/product";
import Rating from "../rating";

interface ProductCardProps {
  product: GetProductSuccessData;
}

/**
 * Product card (Temporary)
 * @param product The product object containing name, price, and image details
 * @constructor
 */
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="bg-white rounded-3xl aspect-square flex flex-col justify-center items-center p-2 text-center hover:cursor-pointer hover:border-brand hover:shadow-lg"
      onClick={() => {
        window.location.href = `/product/${product.product_id}`;
      }}
    >
      <img
        src={product.ProductImage[0]?.image_url}
        alt={product.name}
        className="sm:max-w-[150px] md:max-w-[300px] lg:max-w-[300px] max-h-[150px] rounded-3xl aspect-square object-cover"
      />
      <div className={"m-2 text-xs"}>
        <p>{product.name}</p>
        <p className={"text-md text-brand mb-2"}>${product.price.toFixed(2)}</p>
        <span>
          <Rating
            rating={
              product.Reviews.reduce(
                (prev: number, curr) => prev + curr.rating,
                0,
              ) / product.Reviews.length
            }
          />
        </span>
      </div>
    </div>
  );
};

interface ItemSectionProps {
  sectionTitle: string;
  fromColor: string;
  toColor: string;
  type?: "grid" | "singlerow" | "separatedrows";
  items?: GetProductSuccessData[]; // Ensure items are correctly typed as an array of GetProductSuccessData
}

/**
 * Defines section of items
 * @param sectionTitle Title of the section
 * @param fromColor TailwindCSS gradient class (e.g. from-red-500)
 * @param toColor TailwindCSS gradient class (e.g. to-blue-500)
 * @param items Array of items to display in the section
 * @constructor
 */
const ItemSection = ({
  sectionTitle,
  fromColor,
  toColor,
  items,
}: ItemSectionProps) => {
  return (
    <div className={"m-8 my-10"}>
      <h1 className={"text-2xl font-bold mb-4 text-start"}>{sectionTitle}</h1>
      <div
        className={`bg-gradient-radial ${fromColor} ${toColor} rounded-2xl p-7`}
      >
        <div
          className={"grid lg:grid-cols-4 gap-10 rounded-2xl bg-white/40 p-10"}
        >
          {items &&
            items.map((item) => (
              <ProductCard key={item.product_id} product={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export { ProductCard, ItemSection };
