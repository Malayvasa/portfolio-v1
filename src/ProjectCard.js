function ProjectCard({ Title, Description, url }) {
  return (
    <div>
      <a href={url}>
        <div className="bg-slate-800 flex flex-col p-8 bg-opacity-20 border-transparent backdrop-blur-3xl border cursor-pointer hover:shadow-2xl hover:border-slate-600 transition ease-in-out rounded-sm shadow-lg">
          <div className="text-2xl w-max text-white font-medium">{Title}</div>
          <div className="text-white text-opacity-60 pt-4">{Description}</div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
