"use client";
import NavBar from "@/components/navbar/navbar";
import React, { useEffect, useState } from "react";
import Rating from "@/components/rating";
import { ProductAPIService } from "@/services/products/products-api-services";
import { BarLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/product-card";
import SearchNavbar from "@/components/navbar/search-navbar";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = +params.id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", "similar", id],
    queryFn: async () => {
      return await ProductAPIService.getSimilarProducts(id);
    },
  });

  const {
    data: product,
    isLoading: productIsLoading,
    isError: productIsError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      return await ProductAPIService.getOneProduct(id);
    },
  });

  // const product = SAMPLE_PRODUCT;

  const numberOfRatings = product?.Reviews?.length;

  const averageRating =
    product &&
    numberOfRatings &&
    product?.Reviews?.reduce(
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

  useEffect(() => {
    const t = localStorage.getItem("authToken");

    if (!t) {
      window.location.href = "/login";
    }
  }, []);

  if (productIsLoading) {
    return (
      <div className={"my-20 flex justify-center items-center text-center"}>
        Loading product details...
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <SearchNavbar />

      <div className={"container mx-auto my-4"}>
        <div className={"grid md:grid-cols-2"}>
          <div className="flex justify-center items-center">
            <img
              className="aspect-square max-w-full"
              src={product?.ProductImage[0].image_url}
              alt={product?.name}
            />
          </div>

          <div className={"space-y-2 p-5"}>
            <section className={" rounded-2xl p-5 border-1 border-black/10"}>
              <h3 className={"font-bold text-xl"}>{product?.name}</h3>

              <span className={"flex gap-2 my-2 items-center"}>
                {averageRating} <Rating rating={averageRating || 0} />{" "}
                <span className={"text-sm"}>{numberOfRatings} Review(s)</span>
              </span>

              <div className={"space-y-3"}>
                <h1 className={"font-bold text-2xl mb-8"}>${product?.price}</h1>

                <div className={"flex gap-10"}>
                  <p className={"text-opacity-70 text-black"}>Category</p>
                  <p>
                    {capitalizeFirstLetter(
                      product?.Category?.name || "unknown",
                    )}
                  </p>
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

              <p>{product?.description}</p>
            </div>

            <div
              className={"rounded-2xl p-5 border-1 border-black/10 space-y-2"}
            >
              <h3 className={"text-md font-bold"}>
                Reviews ({numberOfRatings})
              </h3>

              {product?.Reviews.length === 0 && <p>No reviews yet.</p>}

              {product?.Reviews.map((review) => (
                <div
                  key={review?.review_id || ""}
                  className={"border-1 rounded-xl p-3"}
                >
                  <div className={"flex gap-2"}>
                    <p className={"font-bold"}>{review?.User?.username}</p>
                  </div>
                  <Rating rating={review.rating} />
                  <p>{review?.review_text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={
            "m-4 my-4 rounded-2xl p-5 border-1 border-black/10 space-y-2"
          }
        >
          <h3 className={"text-xl font-bold"}>
            We think you&apos;ll love these too!
          </h3>

          {isLoading && (
            <div
              className={
                "py-10 space-y-3 flex flex-col items-center text-center"
              }
            >
              <p>Hold on... We&apos;re getting the best recommendations!</p>
              <BarLoader />
            </div>
          )}

          {isError && <p>Error fetching similar products. Try again later?</p>}

          {!isLoading && data && data.length === 0 && (
            <p>No similar products found.</p>
          )}

          {data && (
            <div className={"grid md:grid-cols-5 col-span-4 gap-2"}>
              {data.map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
