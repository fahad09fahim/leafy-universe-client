import image from "../../../assets/404.png"

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex justify-center ">
            <img src={image} alt="" className="w-auto lg:w-1/2" />
        </div>
    );
};

export default PageNotFound;