/**
 * @description 启动全局定义
 * @class AppHook
 * @param {Egg.EggApp} app
 */
import { Application, IBoot } from 'egg';
class AppHook implements IBoot {
  // eslint-disable-next-line
  constructor(app: Application) { }
}
export default AppHook;
