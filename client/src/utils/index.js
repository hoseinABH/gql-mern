export function normalizeStatus(status) {
  switch (status) {
    case 'In Progress':
      return 'IN_PROGRESS';
    case 'Completed':
      return 'COMPLETED';
    default:
      return 'NEW';
  }
}
