interface ItemSectionProps {
  sectionTitle: string;
  fromColor: string;
  toColor: string;
  type?: "grid" | "singlerow" | "separatedrows";
  items?: any[];
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
    <div className="bg-white rounded-3xl w-[130px] aspect-square flex flex-col justify-center items-center p-2">
      <img src={image} alt={name} className="w-[110px] rounded-3xl mb-2" />
      <p
        className="text-xs font-bold break-words text-center mb-2"
        style={{ fontSize: "10px" }}
      >
        {name}
      </p>
      <p className="text-xs font-bold text-center" style={{ fontSize: "10px" }}>
        ${price}
      </p>
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
  items,
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
          {items &&
            items.map((item) => (
              <ProductCard
                key={item}
                name={item.name}
                price={item.price}
                image={item.ProductImage[0].image_url}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
