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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Silver'],
  tenantRoles: ['Business Owner', 'Operations Staff', 'Customer', 'Admin', 'Manager'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage user data', 'Manage company data', 'Manage car data', 'Manage booking data'],
  ownerAbilities: ['Manage company information', 'Manage car fleet', 'Manage bookings', 'Manage staff operations'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ec53f6f9-57a5-47fe-9c51-8daee04ac5ca',
};
