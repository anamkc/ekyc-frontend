"use client";
import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/navigation';

const authenticatedRoute = (WrappedComponent: React.ComponentType) => {
  const WithAuth = (props: any) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } else {
        setLoading(false);
      }
    }, []);

    return !loading && (<WrappedComponent {...props} />)
  };

  return WithAuth;
};

export default authenticatedRoute;