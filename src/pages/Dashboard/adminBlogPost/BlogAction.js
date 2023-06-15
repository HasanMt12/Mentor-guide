import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdminSecurity';
import { useQuery } from '@tanstack/react-query';
import { AiTwotoneDelete } from "react-icons/ai";

const BlogAction = () => {
      const {user}= useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)

    const {data: blogs = [] , refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async() =>{
            const res = await fetch('https://product-sell-server.vercel.app/blog');
            const data = await res.json();
            console.log(data);
            return data;
            
        }
    });

    
        const handleDeleteNotice = (id) =>{
      fetch(`https://product-sell-server.vercel.app/blog/${id}`, {
        method: 'DELETE', 
      })
      .then(res => res.json())
      .then(data => {
        // if(data.deletedCount > 0){
          
        // }
        refetch()
          toast.success('notice deleted successfully')
      })}

    return (
       <div className='w-11/12 mx-auto '>
           
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Blog Headline</th>
        <th>Blog post time</th>
        <th>delete Blog</th>
      
      </tr>
    </thead>
    <tbody>
      {
        blogs.map((user, i) =><tr key={user._id}>
          
            <th>{i+1}</th>
            <td>{user.blogCategory}</td>
            <td>{user.time}</td>

            <td>
               <div  onClick={() => handleDeleteNotice(user._id)} className='flex cursor-pointer'> <span class="text-[10px] mr-4 font-medium sm:text-xs">Delete</span> <span className='text-gray-50'><AiTwotoneDelete></AiTwotoneDelete></span></div>
            </td>
          </tr>)
      }  
      
    </tbody>
  </table>
</div>
{/* 
            {
              deletingUser && <ConfirmDeleteModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                   successAction = {handleDeleteUser}
                    successButtonName="Delete"
                modalData = {deletingUser}
                    closeModal = {closeModal}
              >
              </ConfirmDeleteModal>
            } */}
        </div>
    );
};

export default BlogAction;