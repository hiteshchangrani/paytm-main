import React from "react";

export const UserImage = () => {
    const image = localStorage.getItem("userImage");

    return (
        <div className="flex justify-center items-center">
            {image ? (
                <img src={image} alt="User" className="rounded-full w-16 h-16" />
            ) : (
                <p>No image uploaded</p>
            )}
        </div>
    );
};
