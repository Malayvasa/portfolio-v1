function ProjectCard({ Title, Description, url }) {
  return (
    <div
      onClick={() => {
        window.open(url, "_blank");
      }}
      className="bg-slate-100 flex flex-col p-8 bg-opacity-20 border-transparent border cursor-pointer hover:shadow-2xl hover:border-white transition ease-in-out rounded-sm shadow-lg"
    >
      <div className="text-2xl w-max text-white font-medium">{Title}</div>
      <div className="text-white text-opacity-60 pt-4">{Description}</div>
    </div>
  );
}

export default ProjectCard;
