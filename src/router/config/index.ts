import LoginRoute from './login'
import OrderManageRoute from './order-manage'
import SupplierManageRoute from './supplier-manage'

export default [...OrderManageRoute, ...SupplierManageRoute, ...LoginRoute]
