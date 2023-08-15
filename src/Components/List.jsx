import React from "react";

export const List = () => {
  return (
    <div className="px-8">
      <h3 className="section-header">My List</h3>

      <div className="px-3 mt-10 w-full h-[237px] flex justify-center items-center flex-col rounded-lg border-dashed border-secondary-grey border-opacity-20 border-2">
        <h3 className="section-header text-[20px] text-center">
          You haven't added any lessons yet
        </h3>
        <p className="section-text text-center">
          once you add a lesson to My List, it will show up here for you to
          access later.
        </p>
      </div>
    </div>
  );
};

export default List;
