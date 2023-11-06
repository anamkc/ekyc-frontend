"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { httpClientAdmin } from "../config/httpClientAdmin";

export default function adminAuthenticatedRoute(Component: any = null) {
  function Auth() {
    const [access, setAccess] = useState<any>({
      grantAccess: false,
      token: null,
    });

    const router = useRouter();

    useEffect(() => {
      try {
        let token: any = localStorage.getItem("token");

        if (token) {
          httpClientAdmin.defaults.headers.common.Authorization = `Bearer ${token}`;
          setAccess({
            grantAccess: true,
            token,
          });
        } else {
          router.push("/admin/signIn");
        }
      } catch (err) {
        console.log(err);
      }
    }, [router]);

    if (!access.grantAccess) return <div>Loading...</div>;

    return (
      <>
        <Component />
      </>
    );
  }

  return Auth;
}
