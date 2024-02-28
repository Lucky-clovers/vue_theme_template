import Vue from "vue";
import {
  Button,
  Table,
  Tag,
  TableColumn,
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Option,
  OptionGroup,
  Select,
  Container,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  DatePicker,
  TimePicker,
  Message,
  MessageBox
} from "element-ui";

Vue.use(Button);
Vue.use(Select);
Vue.use(Table);
Vue.use(Tag);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Container);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Radio);
Vue.use(InputNumber);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(DatePicker);
Vue.use(TimePicker);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
