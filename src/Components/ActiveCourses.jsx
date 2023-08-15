import React from "react";

export const Courses = () => {
  return (
    <div className="px-8">
      <h3 className="section-header">Continue learning</h3>

      <div className="mt-10 w-full h-[237px] flex justify-center items-center flex-col rounded-lg border-dashed border-secondary-grey border-opacity-20 border-2 px-3">
        <h3 className="section-header text-[20px] text-center">
          You don’t have any active courses
        </h3>
        <p className="section-text text-center">
          Browse courses to start learning.
        </p>
      </div>
    </div>
  );
};

export default Courses;
