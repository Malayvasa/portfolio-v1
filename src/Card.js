function Card(props) {
  return (
    <>
      <div className="flex backdrop-filter backdrop-blur-sm flex-col my-auto py-8 gap-y-4 items-center content-center border-0 bg-slate-900 border-dashed bg-opacity-10 w-full shadow-xs rounded-xl text-white mx-auto text-center">
        {props.children}
      </div>
    </>
  );
}

export default Card;
