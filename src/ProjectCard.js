function ProjectCard({ Title, Description, url }) {
  return (
    <div className="bg-slate-100 h-max p-8 bg-opacity-20 border-transparent border cursor-pointer hover:shadow-2xl hover:border-white transition ease-in-out rounded-sm shadow-lg">
      <a href={url}>
        <div className="text-2xl text-white font-medium">{Title}</div>
        <div className="text-white text-opacity-60 pt-4">{Description}</div>
      </a>
    </div>
  );
}

export default ProjectCard;
