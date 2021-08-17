import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

// set timezone always to be UTC
process.env.TZ = 'UTC';
