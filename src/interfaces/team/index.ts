import { TeamMemberInterface } from 'interfaces/team-member';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  name: string;
  description?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  team_member?: TeamMemberInterface[];
  company?: CompanyInterface;
  _count?: {
    team_member?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
