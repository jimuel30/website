import { Deployment } from './Deployment';

export interface Experience {
  companyName: string;
  companyIcon: string;
  stayDuration: string;
  position: string;
  deployments: Deployment[];
}
