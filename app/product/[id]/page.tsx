"use client";
import NavBar from "@/components/navbar/navbar";
import ItemNavbar from "@/components/navbar/secondary-navbar";
import { useState } from "react";
import Rating from "@/components/rating";

const SAMPLE_PRODUCT = {
  product_id: 4,
  name: "Tasty Steel Bacon",
  description: "Rustic cool product!",
  category_id: 1,
  brand_id: null,
  created_at: "2024-07-05T04:43:18.863Z",
  updated_at: "2024-07-05T04:43:18.863Z",
  stock: 100,
  price: 1203.22,
  currency: "SGD",
  Brand: null,
  Category: {
    category_id: 1,
    name: "beauty",
    parent_category_id: null,
    created_at: "2024-06-26T03:41:25.739Z",
    updated_at: "2024-06-26T03:41:25.739Z",
  },
  Reviews: [
    {
      review_id: 7,
      user_id: 31,
      product_id: 4,
      rating: 4,
      review_text: "A pretty cool product!",
      created_at: "2024-07-05T05:42:36.953Z",
      updated_at: "2024-07-05T05:42:36.953Z",
      User: {
        username: "Santiago.Hodkiewicz93",
      },
    },
    {
      review_id: 8,
      user_id: 31,
      product_id: 4,
      rating: 4,
      review_text: "A pretty cool product!",
      created_at: "2024-07-05T05:43:12.629Z",
      updated_at: "2024-07-05T05:43:12.629Z",
      User: {
        username: "Santiago.Hodkiewicz93",
      },
    },
  ],
  ProductImage: [
    {
      product_image_id: 1,
      product_id: 4,
      image_url:
        "https://sg.steelcase.com/cdn/shop/files/MARKETING_ECOM_GESTURE_HR_DD_MEDLEYPEPPERBLACK_R4_REN01_2000x.jpg?v=1694662386",
      created_at: "2024-07-05T04:43:18.863Z",
      updated_at: "2024-07-05T04:43:18.863Z",
    },
  ],
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = +params.id;

  const product = SAMPLE_PRODUCT;

  const numberOfRatings = product.Reviews.length;

  const averageRating =
    product.Reviews.reduce(
      (previousValue, currentValue) => previousValue + currentValue.rating,
      0,
    ) / numberOfRatings;

  const [quantity, setQuantity] = useState(1);

  // TODO: Implement
  const handleAddToCart = () => {};

  // TODO: Implement
  const handleBuyNow = () => {};

  /**
   * Helps keep quantity within range of 1 to 100
   * @param rating
   */
  const handleChangeQuantity = (rating: number) => {
    if (rating < 1) {
      setQuantity(1);
      return;
    }

    if (rating > 100) {
      setQuantity(100);
      return;
    }

    setQuantity(rating);
  };

  return (
    <>
      <NavBar />
      <ItemNavbar />

      <div className={"container mx-auto my-4"}>
        <div className={"grid grid-cols-2"}>
          <div>
            <img
              className={"aspect-square max-w-full"}
              src={product.ProductImage[0].image_url}
              alt={product.name}
            />
          </div>

          <div className={"space-y-2 p-5"}>
            <section className={" rounded-2xl p-5 border-1 border-black/10"}>
              <h3 className={"font-bold text-xl"}>{product.name}</h3>

              <span className={"flex gap-2 my-2 items-center"}>
                {averageRating} <Rating rating={averageRating} />{" "}
                <span className={"text-sm"}>{numberOfRatings} Review(s)</span>
              </span>

              <div className={"space-y-3"}>
                <h1 className={"font-bold text-2xl mb-8"}>${product.price}</h1>

                <div className={"flex gap-10"}>
                  <p className={"text-opacity-70 text-black"}>Category</p>
                  <p>{capitalizeFirstLetter(product.Category.name)}</p>
                </div>

                <div className={"flex gap-10"}>
                  <p className={"text-opacity-70 text-black"}>Quantity</p>

                  <div>
                    <button
                      onClick={() => handleChangeQuantity(quantity - 1)}
                      className={"border-1 border-black/20 w-[30px]"}
                    >
                      –
                    </button>
                    <input
                      className={
                        "border-y-1 border-black/20 text-center w-[40px]"
                      }
                      value={quantity}
                      min={1}
                      max={100}
                      onChange={(e) => handleChangeQuantity(+e.target.value)}
                    />
                    <button
                      onClick={() => handleChangeQuantity(quantity + 1)}
                      className={"border-1 border-black/20 w-[30px]"}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className={"flex gap-2 mt-4"}>
                <button
                  onClick={handleAddToCart}
                  className={
                    "bg-brand/30 border-1 text-brand border-brand rounded-md p-2 px-5"
                  }
                >
                  Add to cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className={
                    "bg-brand border-1 text-white border-brand rounded-md p-2 px-5"
                  }
                >
                  Buy now
                </button>
              </div>
            </section>

            <div className={"rounded-2xl p-5 border-1 border-black/10"}>
              <h3 className={"text-md font-bold"}>Product Description</h3>

              <p>{product.description}</p>
            </div>

            <div
              className={"rounded-2xl p-5 border-1 border-black/10 space-y-2"}
            >
              <h3 className={"text-md font-bold"}>
                Reviews ({numberOfRatings})
              </h3>

              {product.Reviews.length === 0 && <p>No reviews yet.</p>}

              {product.Reviews.map((review) => (
                <div
                  key={review.review_id}
                  className={"border-1 rounded-xl p-3"}
                >
                  <div className={"flex gap-2"}>
                    <p className={"font-bold"}>{review.User.username}</p>
                  </div>
                  <Rating rating={review.rating} />
                  <p>{review.review_text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
