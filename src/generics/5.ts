export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type UserRoleDescr = Record<UserRole, string>;

const RoleDescription: UserRoleDescr = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
