import { useState } from 'react';
// Mutations
import { UPDATE_PROJECT } from '../mutations/projectMutations';
// Queries
import { GET_PROJECT } from '../queries/projectQueries';
// Hooks
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
// Utilities
import { normalizeStatus } from '../utils';

export default function EditProjectForm(props) {
  const [name, setName] = useState(props.project.name);
  const [description, setDescription] = useState(props.project.description);
  const [status, setStatus] = useState(normalizeStatus(props.project.status));
  const navigate = useNavigate();
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: props.project.id, name, description, status },
    refetchQueries: [
      { query: GET_PROJECT, variables: { id: props.project.id } },
    ],
    onCompleted: () => {
      navigate('/');
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert('Please fill out all fields');
    }

    updateProject(name, description, status);
  };

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="NEW">Not Started</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
