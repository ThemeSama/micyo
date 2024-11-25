export type TUsers = {
  id: number;
  username?: string;
  name: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  url: string;
  description: string;
  link: string;
  locale?: string;
  nickname?: string;
  slug: string;
  registered_date?: string;
  roles?: [];
  password?: string;
  capabilities?: object;
  extra_capabilities?: object;
  avatar_urls: object;
  meta?: object;
};