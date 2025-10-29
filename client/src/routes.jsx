// routes.js
import Home from './pages/Home';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import Sitemap from './pages/Sitemap';
// Solutions
import Aerospace from "./pages/solutions/Aerospace";
import Automotive from "./pages/solutions/Automotive";
import ContractManufacturers from "./pages/solutions/ContractManufacturers";
import HeavyMachinery from "./pages/solutions/HeavyMachinery";
import MedicalDevices from "./pages/solutions/MedicalDevices";
import OilGas from "./pages/solutions/OilGas";
import ProductionMonitoring from "./pages/solutions/ProductionMonitoring";
import ConditionMonitoring from "./pages/solutions/ConditionMonitoring";
import PredictiveMaintenance from "./pages/solutions/PredictiveMaintenance";
import ProcessOptimization from './pages/solutions/ProcessOptimization';
import MachineBuilders from "./pages/solutions/MachineBuilders";

// Products
import ProductionCounterDisplay from "./pages/products/ProductionCounterDisplay";
import AndonBoardDisplay from "./pages/products/AndonBoardDisplay";
import IndustrialParameterDisplay from "./pages/products/IndustrialParameterDisplay";
import AndonSignalTowerLight from "./pages/products/AndonSignalTowerLight";
import WirelessAndonTowerLight from "./pages/products/WirelessAndonTowerLight";
import CloudAndonTowerLight from "./pages/products/CloudAndonTowerLight";
import ElectronicMessageDisplay  from "./pages/products/ElectronicMessageDisplay";
import AndonTowerLight from "./pages/products/AndonTowerLight";

// Component mapping
const componentMap = {
  'Home': Home,
  'Contact': Contact,
  'About Us': Company,
  'Blogs': Blogs,
  'Blog Detail': BlogDetail,
  'Sitemap': Sitemap,
  'Admin Panel': AdminPanel,
  'Admin Login': AdminLogin,
  'Admin Signup': AdminSignup,
  'Aerospace': Aerospace,
  'Automotive': Automotive,
  'Contract Manufacturers': ContractManufacturers,
  'Heavy Machinery': HeavyMachinery,
  'Medical Devices': MedicalDevices,
  'Oil & Gas': OilGas,
  'Production Monitoring': ProductionMonitoring,
  'Condition Monitoring': ConditionMonitoring,
  'Predictive Maintenance': PredictiveMaintenance,
  'Process Optimization': ProcessOptimization,
  'Machine Builders': MachineBuilders,
  'Production Counter Display': ProductionCounterDisplay,
  'Andon Board Display': AndonBoardDisplay,
  'Industrial Parameter Display': IndustrialParameterDisplay,
  'Andon Signal Tower Light': AndonSignalTowerLight,
  'Wireless Andon Tower Light': WirelessAndonTowerLight,
  'Cloud Andon Tower Light': CloudAndonTowerLight,
  'Electronic Message Display': ElectronicMessageDisplay,
  'Andon Tower Light': AndonTowerLight
};

// Import the config
import { routesConfig } from './routesConfig.js';

// Map components to routes
export const appRoutes = routesConfig.map(route => ({
  ...route,
  element: componentMap[route.name]
}));