import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmDeleteModal from '../../shared/modal/ConfirmDeleteModal';

const AllMentors = () => {
    const [deletingUser, setDeletingUser] = useState(null);

     const closeModal = () => {
        setDeletingUser(null);
    }

   
  const {data: seller = [] , refetch  } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://product-sell-server.vercel.app//users/mentor');
            const data = await res.json();
            console.log(data);
            return data;
            
        }
    });

    //delete seller 
        const handleDeleteUser = user =>{
      fetch(`https://product-sell-server.vercel.app/users/${user._id}`, {
        method: 'DELETE', 
         headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          refetch()
          toast.success('deleted successfully')
        }
        
      })
    }

      // seller verified
          const handleMakeVerified = id => {
              fetch(`https://product-sell-server.vercel.app/users/admin/${id}`, {
                  method: 'PUT'
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if(data.modifiedCount > 0 ){
                      toast.success('make seller verified successfully')
                      refetch();
                  }
              })
          }
    return (
        <div>
                            <div className="overflow-x-auto mx-auto w-11/12 mt-6">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th className='bg-slate-400'></th>
                      <th className='bg-slate-400'>Name</th>
                      <th className='bg-slate-400'>Email</th>
                      <th className='bg-slate-400'>role</th>
                      <th className='bg-slate-400'>make verify</th>
                      <th className='bg-slate-400'>Delete user</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*  map all seller */}
                    {
                      seller.map((s, i) =><tr key={s._id}>
          
            <th>{i+1}</th>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.role}</td>
           <td>{ s?.verification !== 'verify' ? <button onClick={()=> handleMakeVerified(s._id)} className="btn btn-xs  text-gray-900 ">verify seller</button>
           :<p className='text-green-500 '> verified seller</p>} </td>

            <td>
                  <label onClick={() => setDeletingUser(s)} htmlFor="confirmation-modal" className="btn btn-sm btn-error"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </label>
                            </td>
                          </tr>)
                      }  
                      
                    </tbody>
                  </table>
                </div>
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
            }
          
        </div>
    );
};

export default AllMentors;