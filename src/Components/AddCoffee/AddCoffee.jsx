import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "new coffee added successfully!",
                        icon: "success"
                    });
                    data.reset();
                }

            })
    }
    return (
        <div className='w-11/12 mx-auto px-16 bg-[#F4F3F0]'>
            <div className='text-center items-center'>
                <h3 className='text-3xl p-5'>Add New coffee</h3>
                <p className='mx-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleAddCoffee}>
                {/* Coffee Name & Quantity */}
                <div className='flex gap-9 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Name</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='name' placeholder="Enter coffee name" />
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Available quantity</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='quantity' placeholder="Available quantity" />
                    </div>
                </div>
                {/* Supplier & Taste */}
                <div className='flex gap-9 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Supplier</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='supplier' placeholder="Enter coffee supplier" />
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Taste</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='taste' placeholder="Enter coffee taste" />
                    </div>
                </div>
                {/* Category & Details */}
                <div className='flex gap-9 mb-6'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Category</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='category' placeholder="Enter coffee category" />
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text font-bold'>Details</span> <br />
                        </label>
                        <input className="input input-bordered w-full" name='details' placeholder="Enter coffee details" />
                    </div>
                </div>
                {/* Photo */}
                <div className='form-control mb-6'>
                    <label className='label'>
                        <span className='label-text font-bold'>Photo</span> <br />
                    </label>
                    <input className="input input-bordered w-full" name='photo' placeholder="Enter photo URL" />
                </div>
                <button type="submit" className="mb-6 btn btn-block bg-[#D2B48C] text-[#331A15] font-bold">Add Coffee</button>
            </form>

        </div>
    );
};

export default AddCoffee;