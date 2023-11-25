"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const Profile = ({ userDetails }: { userDetails: any }) => {
  console.log(userDetails);
  const [user, setUser] = React.useState(userDetails);
  const [showCitizenshipImage, setShowCitizenshipImage] = React.useState(false);

  const handleToggleImage = () => {
    setShowCitizenshipImage(!showCitizenshipImage);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <div className="flex items-center mb-10">
        <div className="mr-4">
          {user && (
            <Image
              src={user.profilePictureUrl}
              alt={`${user.firstName} ${user.lastName}'s Profile Picture`}
              width={120}
              height={120}
              className="rounded-full"
            />
          )}
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">
            {user && `${user.firstName} ${user.lastName}`}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{user && user.email}</p>
          <p className="text-gray-600 dark:text-gray-300">{user && user.phoneNumber}</p>
          <p className="text-gray-600 dark:text-gray-300">{user && user.address}</p>
        </div>
      </div>
      <Button
        onClick={handleToggleImage}
        className="mt-10"
        name="Show Citizenship"
      />
      {showCitizenshipImage && (
        <div className="mt-4">
          {user && <Image
            src={user.citizenshipImageUrl}
            alt={`${user.firstName} ${user.lastName}'s Citizenship Image`}
            width={300}
            height={150}
            className="rounded-md"
          /> }
        </div>
      )}
    </div>
  );
 
};

export default Profile;
