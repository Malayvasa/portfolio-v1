function Card(props) {
  return (
    <>
      <div className="flex backdrop-filter backdrop-blur-sm flex-col my-auto py-8 gap-y-4 items-center content-center border-0 bg-slate-900 border-dashed bg-opacity-10 shadow-xs rounded-xl text-white mx-auto w-80  text-center">
        {props.children}
      </div>
    </>
  );
}

export default Card;
