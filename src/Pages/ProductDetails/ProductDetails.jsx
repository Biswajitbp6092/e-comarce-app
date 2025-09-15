import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";
import TextField from "@mui/material/TextField";
import ProdutsSlider from "../../components/ProdutsSlider/ProdutsSlider";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";


const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition ease-linear"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition ease-linear"
            >
              Fashions
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className="link transition ease-linear"
            >
              Croped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>
          
          <div className="productContain w-[60%] pr-10 pl-10">
            <ProductDetailsComponent/>

            <div className="flex items-center gap-4 mt-6">
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <AiOutlineHeart size={22} />
                Add to Wishlist
              </span>
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <LuGitCompare size={22} />
                Add to Compare
              </span>
            </div>
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              onClick={() => setActiveTab(0)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 0 ? " text-[#ff5252]" : ""
              }`}
            >
              Description
            </span>
            <span
              onClick={() => setActiveTab(1)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 1 ? " text-[#ff5252]" : ""
              }`}
            >
              Product Details
            </span>
            <span
              onClick={() => setActiveTab(2)}
              className={`link text-[17px] cursor-pointer font-[500] ${
                activeTab === 2 ? " text-[#ff5252]" : ""
              }`}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, unde corrupti sed atque obcaecati iure quae quasi
                veniam esse repellendus quibusdam corporis tempora fugit, harum
                modi, doloribus soluta possimus officia?
              </p>
              <h4>Lorem ipsum dolor sit amet,</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                repellat, cum corrupti labore, quam unde iste dolore impedit
                fugiat temporibus ipsa eius. Doloribus quas corrupti
                exercitationem quae. Reprehenderit, numquam voluptatum!
              </p>

              <h4>Lorem ipsum dolor sit amet,</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                repellat, cum corrupti labore, quam unde iste dolore impedit
                fugiat temporibus ipsa eius. Doloribus quas corrupti
                exercitationem quae. Reprehenderit, numquam voluptatum!
              </p>

              <h4>Lorem ipsum dolor sit amet,</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                repellat, cum corrupti labore, quam unde iste dolore impedit
                fugiat temporibus ipsa eius. Doloribus quas corrupti
                exercitationem quae. Reprehenderit, numquam voluptatum!
              </p>

              <h4>Lorem ipsum dolor sit amet,</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                repellat, cum corrupti labore, quam unde iste dolore impedit
                fugiat temporibus ipsa eius. Doloribus quas corrupti
                exercitationem quae. Reprehenderit, numquam voluptatum!
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td class="px-6 py-4">Silver</td>
                      <td class="px-6 py-4">Laptop</td>
                      <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td class="px-6 py-4">White</td>
                      <td class="px-6 py-4">Laptop PC</td>
                      <td class="px-6 py-4">$1999</td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td class="px-6 py-4">Black</td>
                      <td class="px-6 py-4">Accessories</td>
                      <td class="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer Question And answer</h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-8">
                  <div className="review pb-5 pt-5  border-b-2 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7lR6pNUJ6Zd2mWQsCva9ecIUmz-IK4qxNA&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="tect-[16px]">Sneha Das</h4>
                        <h5 className="tect-[13px] mb-0">15-09-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus aut possimus quos iure eveniet
                          esse nihil earum repellat, quidem, corrupti laborum
                          perspiciatis? Mollitia possimus dolore temporibus
                          ratione cum, totam delectus.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pb-5 pt-5  border-b-2 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7lR6pNUJ6Zd2mWQsCva9ecIUmz-IK4qxNA&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="tect-[16px]">Sneha Das</h4>
                        <h5 className="tect-[13px] mb-0">15-09-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus aut possimus quos iure eveniet
                          esse nihil earum repellat, quidem, corrupti laborum
                          perspiciatis? Mollitia possimus dolore temporibus
                          ratione cum, totam delectus.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pb-5 pt-5  border-b-2 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7lR6pNUJ6Zd2mWQsCva9ecIUmz-IK4qxNA&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="tect-[16px]">Sneha Das</h4>
                        <h5 className="tect-[13px] mb-0">15-09-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus aut possimus quos iure eveniet
                          esse nihil earum repellat, quidem, corrupti laborum
                          perspiciatis? Mollitia possimus dolore temporibus
                          ratione cum, totam delectus.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pb-5 pt-5  border-b-2 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7lR6pNUJ6Zd2mWQsCva9ecIUmz-IK4qxNA&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="tect-[16px]">Sneha Das</h4>
                        <h5 className="tect-[13px] mb-0">15-09-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus aut possimus quos iure eveniet
                          esse nihil earum repellat, quidem, corrupti laborum
                          perspiciatis? Mollitia possimus dolore temporibus
                          ratione cum, totam delectus.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pb-5 pt-5  border-b-2 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7lR6pNUJ6Zd2mWQsCva9ecIUmz-IK4qxNA&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="tect-[16px]">Sneha Das</h4>
                        <h5 className="tect-[13px] mb-0">15-09-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus aut possimus quos iure eveniet
                          esse nihil earum repellat, quidem, corrupti laborum
                          perspiciatis? Mollitia possimus dolore temporibus
                          ratione cum, totam delectus.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>

                  <div className="review pb-5 pt-5  border-b-2 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7lR6pNUJ6Zd2mWQsCva9ecIUmz-IK4qxNA&s"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="tect-[16px]">Sneha Das</h4>
                        <h5 className="tect-[13px] mb-0">15-09-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus aut possimus quos iure eveniet
                          esse nihil earum repellat, quidem, corrupti laborum
                          perspiciatis? Mollitia possimus dolore temporibus
                          ratione cum, totam delectus.
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>

                <div className="reviewForm bg-[#f1f1f1] p-4 rounded-md">
                  <h2 className="text-[18px]">Add review</h2>

                  <form action="" className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a Review..."
                      className="w-full"
                      multiline
                      Rows={5}
                    />
                    <br /><br />

                    <div>
                      <Rating name="size-small" defaultValue={4} />
                    </div>
                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>

                    </div>


                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container pt-10">
          <h2 className="text-[20px] font-600]">Related Products</h2>
          <ProdutsSlider items={6} />
          
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
