interface ItemSectionProps {
  sectionTitle: string;
  fromColor: string;
  toColor: string;
  type?: "grid" | "singlerow" | "separatedrows";
}

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

/**
 * Product card (Temporary)
 * @param name
 * @param price
 * @param image
 * @constructor
 */
const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <div
      className={
        "bg-white rounded-3xl w-[130px] aspect-square flex flex-col justify-center items-center"
      }
    >
      <img src={image} alt={name} className={"w-[110px]"} />
      {/*<p className={"text-lg font-bold"}>{name}</p>*/}
      {/*<p className={"text-lg font-bold"}>{price}</p>*/}
    </div>
  );
};

/**
 * Defines section of items
 * @param sectionTitle Title of the section
 * @param fromColor TailwindCSS gradient class (e.g. from-red-500)
 * @param toColor TailwindCSS gradient class (e.g. to-blue-500)
 * @constructor
 */
export const ItemSection = ({
  sectionTitle,
  fromColor,
  toColor,
}: ItemSectionProps) => {
  return (
    <div className={"m-8 my-10"}>
      <h1 className={"text-2xl font-bold mb-4"}>{sectionTitle}</h1>
      <div
        className={`bg-gradient-radial ${fromColor} ${toColor} rounded-2xl p-7`}
      >
        <div
          className={"grid lg:grid-cols-6 gap-10 rounded-2xl bg-white/40 p-10"}
        >
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <ProductCard
                key={index}
                name={"Chair"}
                price={1000}
                image={
                  "https://www.bludot.com/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush_2.jpg?optimize=medium&fit=bounds&height=1200&width=1500&canvas=1500:1200"
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};
