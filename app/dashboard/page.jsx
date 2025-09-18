import React from 'react';
import ProtectedButton from '@/components/protectedbutton';

const Page = () => {
    return (
        <div>
            <ProtectedButton 
  onClick={() => console.log("Open Add Course Modal")}
  className="bg-blue-500 text-white px-4 py-2 rounded"
>
  Add New Course
</ProtectedButton>

        </div>
    );
}

export default Page;
