import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../../App";
import { fetchDataFromApi, postData } from "../../utlis/api";

const Reviews = (props) => {
  const [reviews, setReviews] = useState({
    image: "",
    userName: "",
    review: "",
    rating: 1,
    userId: "",
    productId: "",
  });
  const [reviewsData, setReviewsData] = useState([]);

  const context = useContext(myContext);

  useEffect(() => {
    setReviews(() => ({
      ...reviews,
      image: context?.userData?.avatar,
      userName: context?.userData?.name,
      userId: context?.userData?._id,
      productId: props?.productId,
    }));
    getReviews();
  }, [context?.userData, props?.productId]);

  const onchangeInput = (e) => {
    setReviews(() => ({
      ...reviews,
      review: e.target.value,
    }));
  };

  const addReview = (e) => {
    e.preventDefault();
    if (reviews?.review !== "") {
      postData(`/api/user/addReview`, reviews).then((res) => {
        if (res?.error === false) {
          context.openAlartBox("Sucess", res?.message);
          setReviews(() => ({
            ...reviews,
            review: "",
            rating: 1,
          }));
          getReviews();
        } else {
          context.openAlartBox("Error", res?.message);
        }
      });
    } else {
      context.openAlartBox("Error", "Please Add Review");
    }
  };

  const getReviews = () => {
    fetchDataFromApi(`/api/user/getReviews?productId=${props?.productId}`).then(
      (res) => {
        if (res?.data?.error === false) {
          setReviewsData(res?.data?.reviews);
          props.setReviewsCount(res?.data?.reviews.length)
        }
      }
    );
  };

  return (
    <div className="w-full productReviewsContainer">
      <h2 className="text-[18px]">Customer Question And answer</h2>

      {reviewsData?.length !== 0 && (
        <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-8">
          {reviewsData?.map((review, index) => {
            return (
              <div
                key={index}
                className="review pb-5 pt-5  border-b-2 border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between"
              >
                <div className="info w-[60%] flex items-center gap-3">
                  {review?.image !== "" ? (
                    <div className="img w-[70px] h-[70px] overflow-hidden rounded-full">
                      <img src={review?.image} alt="user" className="w-full" />
                    </div>
                  ) : (
                    <div className="img w-[70px] h-[70px] overflow-hidden rounded-full">
                      <img src="/user.svg" alt="user" className="w-full" />
                    </div>
                  )}

                  <div className="w-[80%]">
                    <h4 className="tect-[16px]">{review?.userName}</h4>
                    <h5 className="tect-[13px] mb-0">
                      {review?.createdAt?.split("T")[0]}
                    </h5>
                    <p className="!mt-0 !mb-0">{review?.review}</p>
                  </div>
                </div>
                <Rating name="size-small" value={review?.rating} readOnly />
              </div>
            );
          })}
        </div>
      )}

      <div className="reviewForm bg-[#ffffff] p-4 rounded-md">
        <h2 className="text-[18px]">Add review</h2>

        <form action="" className="w-full mt-5" onSubmit={addReview}>
          <TextField
            id="outlined-multiline-flexible"
            label="Write a Review..."
            className="w-full"
            onChange={onchangeInput}
            name="review"
            multiline
            rows={5}
            value={reviews.review}
          />
          <br />
          <br />

          <div>
            <Rating
              name="size-small"
              value={reviews.rating}
              onChange={(event, newValue) => {
                setReviews(() => ({
                  ...reviews,
                  rating: newValue,
                }));
              }}
            />
          </div>
          <div className="flex items-center mt-5">
            <Button type="submit" className="btn-org">
              Submit Review
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
