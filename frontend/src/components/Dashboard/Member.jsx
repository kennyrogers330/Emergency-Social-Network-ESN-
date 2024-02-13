function Member() {
  return (
    <>
      <div className="flex flex-row mt-2">
        <img
          className="object-cover h-10 rounded-lg m-2"
          src={require('./../../Images/leo.jpg')}
          alt="profile"
        />

        <div className="w-full flex justify-between">
          <div className="flex flex-col ml-4">
            <div className="font-bold">Florancio Dorrance</div>
            <div className="font-thin">+250781885227</div>
          </div>
          <div className="mr-2">online</div>
        </div>
      </div>
    </>
  );
}
export default Member;
