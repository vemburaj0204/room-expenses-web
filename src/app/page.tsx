'use client';

import { useRouter } from "next/navigation";
import { type FC } from "react";

const Page: FC = () => {
  //  const router = useRouter();
  'use client';

const handleNavigation = async () => {
  try {
    const res = await fetch("http://localhost:5152/api/auth");
    const data = await res.text();
    console.log(data);
  } catch (err) {
    console.error("API failed", err);
  }
};
   
    // router.push('/login');
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <button onClick={handleNavigation}>login</button>
          <h1 className="text-2xl font-bold">Hello World</h1>
        </div>
      </div>
    </main>
  );
};

export default Page;