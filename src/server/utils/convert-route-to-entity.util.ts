const mapping: Record<string, string> = {
  companies: 'company',
  projects: 'project',
  tasks: 'task',
  teams: 'team',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
