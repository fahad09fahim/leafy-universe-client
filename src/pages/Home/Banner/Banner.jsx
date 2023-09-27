

const Banner = () => {
    return (
        <div className="hero min-h-[60vh]"  style={{backgroundImage: 'url(https://i.imgur.com/TcW1tPB.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
      <p className="mb-5 text-xl">Leafy Universe</p>
      <p className="mb-5 text-3xl"><span className="text-orange-600 font-bold font-serif">Cultivate</span> your paradise</p>
    </div>
  </div>
</div>
    );
};

export default Banner;