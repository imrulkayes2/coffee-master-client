import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updateCoffee);
        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Coffee Updated successfully!",
                        icon: "success"
                    });
                }

            })
    }
    return (
        <div className='w-11/12 mx-auto px-16 bg-[#F4F3F0]'>
            <div className='text-center items-center'>
                <h3 className='text-3xl p-5'>Update coffee</h3>
                <p className='mx-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleUpdateCoffee}>
                {/* Coffee Name & Quantity */}
                <div className='flex gap-9 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Name</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='name' defaultValue={name} placeholder="Enter coffee name" />
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Available quantity</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='quantity' defaultValue={quantity} placeholder="Available quantity" />
                    </div>
                </div>
                {/* Supplier & Taste */}
                <div className='flex gap-9 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Supplier</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" />
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Taste</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='taste' defaultValue={taste} placeholder="Enter coffee taste" />
                    </div>
                </div>
                {/* Category & Details */}
                <div className='flex gap-9 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Category</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='category' defaultValue={category} placeholder="Enter coffee category" />
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Details</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='details' defaultValue={details} placeholder="Enter coffee details" />
                    </div>
                </div>
                {/* Photo */}
                <div className='form-control mb-6'>
                    <label className='label'>
                        <span className='label-text font-bold'>Photo</span> <br />
                    </label>
                    <input className="input input-bordered w-full" name='photo' defaultValue={photo} placeholder="Enter photo URL" />
                </div>
                <button type="submit" className="mb-6 btn btn-block bg-[#D2B48C] text-[#331A15] font-bold">Update Coffee</button>
            </form>

        </div>
    );
};
export default UpdateCoffee;