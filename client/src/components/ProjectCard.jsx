export default function ProjectCard(props) {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{props.project.name}</h5>

            <a className="btn btn-light" href={`/projects/${props.project.id}`}>
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{props.project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
