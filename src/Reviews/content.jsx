import React from "react";
import ReviewCard from "../ReviewCard";
function content() {
  return (
    <div className="mt-32 mx-12">
      <div>
        <h1 className="text-brown100 font-recoleta font-semibold text-2xl mb-6">
          Film Reviews
        </h1>
        <p className="text-brown80 font-normal">
          Here you can find top of the line movie reviews proferred by the
          community. Be sure to discover unerring and edifying reviews on your
          favourite titles.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 my-12">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default content;
