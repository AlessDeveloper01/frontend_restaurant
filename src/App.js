import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { AllRoutes } from './routes';
import 'gridjs/dist/theme/mermaid.min.css';
import './index.scss';
function App() {
    return (_jsx(_Fragment, { children: _jsx(AllRoutes, {}) }));
}
export default App;
