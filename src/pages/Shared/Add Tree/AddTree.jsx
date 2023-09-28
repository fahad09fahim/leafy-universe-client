

const AddTree = () => {
    return (
        <div className="hero  bg-base-100 ">
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input type="number" placeholder="Age" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Height</span>
          </label>
          <input type="number" placeholder="Height" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Health</span>
          </label>
          <input type="text" placeholder="Health" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" placeholder="$" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input type="text" placeholder="url" className="input input-bordered" />
        </div>
      </div>
      <div className="form-control mt-6">
          <button className="btn btn-warning">Add Tree</button>
        </div>
      </form>
 </div>
</div>
    );
};

export default AddTree;