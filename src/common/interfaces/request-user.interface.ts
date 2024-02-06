/**
 * 操作、访问用户信息
 */
export interface RequestUser {
  id: number;

  openid: string;

  unionid: string;

  session: string;

  token: string;

  credit: number;

  roles: string[];

  ip?: string;
}
