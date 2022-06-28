// import { Permission } from '@/store/modules/user/typing';
// permissions: Permission[]
export const hasAuthority = (route, permissions) => {
  if (route.meta?.authority) {
    return permissions.some(value => {
      return route.meta?.authority?.includes(value);
    });
  }

  return true;
};
