// File: pages/admin/dashboard/[userId]/index.tsx
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import adminAuthenticatedRoute from "@/hooks/adminAuthenticatedRoute";
import kycLanding from "/public/adminKycImg.png";

const Users = () => {
  const router = useRouter();
  // const { userId } = router.query;
  // const userIdString = typeof userId === 'string' ? userId : '';

  // Other logic for fetching user details based on userId...

  return (
    <div>
      <div className="bg-black relative overflow-hidden">
        <div>
          <div className="w-full flex justify-center h-[300px] md:h-[400px] lg:h-[540px] p-2">
            <Image
              src={kycLanding}
              alt="KYC Landing Image"
              width={1500}
              height={250}
            />
          </div>
          <div className="w-full flex justify-center items-center">
            {/* Assuming Profile component needs userDetails as a prop */}
            {/* <Profile userDetails={userDetails} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default adminAuthenticatedRoute(Users);
