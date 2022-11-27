import React from 'react';

const DeleteModalReportedItem = ({title,message,successAction,data,successButtonName,closeModal}) => {
    return ( 
        <div>
           <div className="modal" id="my-modal-2">
             <div className="modal-box">
               <h3 className="font-bold text-lg">{title}</h3>
               <p className="py-4 font-semibold">{message}</p>
               <div className="modal-action">
                 <label onClick={()=>successAction(data)} htmlFor="confirmation-modal" className="btn btn-secondary text-white">{successButtonName}</label>
                 <label  onClick={closeModal} className="btn outline btn-error text-white">Cancel</label>
               </div> 
             </div>
           </div>
        </div>
    );
};

export default DeleteModalReportedItem;