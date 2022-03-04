function ProjectCard({ Title, Description, url }) {
  return (
    <div>
      <a href={url}>
        <div className="group bg-slate-200 flex flex-col p-8 bg-opacity-20 border-transparent backdrop-blur-3xl border cursor-pointer hover:shadow-2xl hover:border-slate-100 transition ease-in-out rounded-sm shadow-md">
          <div className="text-xl w-max text-white text-opacity-60 group-hover:text-white font-medium transition ease-in-out">
            {Title}
          </div>
          <div className="text-white text-sm text-opacity-60 pt-4">
            {Description}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
