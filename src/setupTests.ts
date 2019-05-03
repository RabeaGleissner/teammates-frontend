import 'jest-extended'
import 'jest-dom/extend-expect'
import { configure } from 'enzyme';
import Adapter = require("enzyme-adapter-react-16");

configure({ adapter: new Adapter() });