
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-church-green">
      <div className="text-center max-w-md p-6">
        <h1 className="text-5xl font-serif text-church-red mb-4">404</h1>
        <p className="text-2xl font-medium mb-6">Page Not Found</p>
        <p className="mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button asChild className="bg-church-red hover:bg-church-red-light">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
