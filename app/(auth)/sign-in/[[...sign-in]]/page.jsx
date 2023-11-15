import React from "react";
import { SignIn } from "@clerk/nextjs";
const page = () => {
    return <div className="h-100">
        <p className="font-semibold #103FEF">Collab for Team </p>
        <div className="flex items-center justify-center bg-gray-300 p-4 rounded-lg">
            <SignIn />
        </div>
    </div>;
};

export default page;
