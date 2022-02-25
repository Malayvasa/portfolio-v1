function Card(props) {
  return (
    <>
      <div className="noisy flex shadow-sm backdrop-filter backdrop-blur-2xl flex-col my-auto py-8 gap-y-4 items-center content-center border-0 bg-slate-900 border-dashed bg-opacity-20 w-full shadow-xs rounded-xl text-white mx-auto text-center">
        {props.children}
      </div>
    </>
  );
}

export default Card;
