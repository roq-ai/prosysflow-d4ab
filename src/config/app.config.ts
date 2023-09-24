interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Client Manager', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'ProSysFlow',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage projects', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/94a9092e-4da1-4af2-81e6-1d0be6e43d7e',
};
