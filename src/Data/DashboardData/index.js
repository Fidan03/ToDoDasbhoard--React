import { MdDashboard } from "react-icons/md";
import { FaExclamation, FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { IoMdSettings, IoMdHelpCircleOutline } from "react-icons/io";

const dashboardData = [
    {
        id: 0,
        icon: MdDashboard,
        p: 'Dashboard',
    },
    {
        id: 1,
        icon: FaExclamation,
        p: 'Vital Task',
    },
    {
        id: 2,
        icon: BiTask ,
        p: 'My Task',
    },
    {
        id: 3,
        icon: FaTasks ,
        p: 'Task Categories',
    },
    {
        id: 4,
        icon: IoMdSettings,
        p: 'Settings',
    },
    {
        id: 5,
        icon: IoMdHelpCircleOutline ,
        p: 'Help',
    },
]

export default dashboardData;