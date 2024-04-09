import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDeleteCoffee = () => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl flex">
            <div>
                <figure><img src={photo} /></figure>
            </div>
            <div className="flex justify-between w-full pr-8">
                <div className="pl-5 pt-6">
                    <h2>Name:{name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end my-4">
                    <div className="flex flex-col gap-2">
                        <button className="btn join-item">View</button>
                        <button className="btn join-item">Edit</button>
                        <button onClick={() => handleDeleteCoffee(_id)} className="btn join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;