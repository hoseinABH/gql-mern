// Icons
import { FaTrash } from 'react-icons/fa';
// Mutations
import { DELETE_PROJECT } from '../mutations/projectMutations';
// Queries
import { GET_PROJECTS } from '../queries/projectQueries';
// Hooks
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export default function DeleteProjectButton(props) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: props.projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
}
