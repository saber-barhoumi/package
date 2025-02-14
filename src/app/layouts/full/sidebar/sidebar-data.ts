import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
 
  
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-grid-add',
    route: '/dashboard',
    bgcolor: 'primary',
  },

  {
    navCap: 'UI Components',
  },
  {
    displayName: 'Badge',
    iconName: 'archive',
    route: '/ui-components/badge',
    bgcolor: 'warning',
  },
  {
    displayName: 'Chips',
    iconName: 'info-circle',
    route: '/ui-components/chips',
    bgcolor: 'success',
  },
  {
    displayName: 'Lists',
    iconName: 'list-details',
    route: '/ui-components/lists',
    bgcolor: 'error',
  },
  {
    displayName: 'Menu',
    iconName: 'file-text',
    route: '/ui-components/menu',
    bgcolor: 'primary',
  },
  {
    displayName: 'Tooltips',
    iconName: 'file-text-ai',
    route: '/ui-components/tooltips',
    bgcolor: 'secondary',
  },
  {
    displayName: 'Forms',
    iconName: 'clipboard-text',
    route: '/ui-components/forms',
    bgcolor: 'warning',
  },
  {
    displayName: 'Tables',
    iconName: 'table',
    route: '/ui-components/tables',
    bgcolor: 'success',
  },

  {
    navCap: 'Authentication',
  },
  {
    displayName: 'Login',
    iconName: 'login',
    bgcolor: 'secondary',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
        iconName: 'point',
        bgcolor: 'transparent',
        route: '/authentication/login',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    bgcolor: 'warning',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
        iconName: 'point',
        bgcolor: 'transparent',
        route: '/authentication/register',
      },
    ],
  },

  

  // Main Navigation Categories
  {
    navCap: 'Carpooling',
  },
  {
    displayName: 'Carpooling',
    iconName: 'directions_car',
    bgcolor: 'success',
    route: '/carpooling',
    children: [
      {
        displayName: 'Carpooling Offers',
        iconName: 'local_offer',
        bgcolor: 'transparent',
        route: '/carpooling/offers',
      },
      {
        displayName: 'Carpooling Requests',
        iconName: 'commute',
        bgcolor: 'transparent',
        route: '/carpooling/requests',
      },
      {
        displayName: 'History',
        iconName: 'history',
        bgcolor: 'transparent',
        route: '/carpooling/history',
      },
      {
        displayName: 'Statistics ',
        iconName: 'Staisues',
        bgcolor: 'transparent',
        route: '/carpooling/Statistics',
      },
    ],
  },
  {
    navCap: 'Loyalty Card',
  },
  {
    displayName: 'Loyalty Card',
    iconName: 'card_giftcard',
    bgcolor: 'success',
    route: '/loyalty-card',
    children: [
      {
        displayName: 'Points Management',
        iconName: 'star',
        bgcolor: 'transparent',
        route: '/loyalty-card/points-management',
      },
      {
        displayName: 'Rewards Management',
        iconName: 'redeem',
        bgcolor: 'transparent',
        route: '/loyalty-card/rewards-management',
      },
      {
        displayName: 'Marketing Campaigns',
        iconName: 'campaign',
        bgcolor: 'transparent',
        route: '/loyalty-card/marketing-campaigns',
      },
      {
        displayName: 'Analytics',
        iconName: 'analytics',
        bgcolor: 'transparent',
        route: '/loyalty-card/analytics',
      },
    ],
  },

  {
    navCap: 'Support & Settings',
  },
  {
    displayName: 'Support',
    iconName: 'support_agent',
    bgcolor: 'secondary',
    route: '/support',
    children: [
      {
        displayName: 'Complaints',
        iconName: 'report_problem',
        bgcolor: 'transparent',
        route: '/support/complaints',
      },
      {
        displayName: 'Customer Assistance',
        iconName: 'headset_mic',
        bgcolor: 'transparent',
        route: '/support/assistance',
      },
      {
        displayName: 'FAQ',
        iconName: 'help_outline',
        bgcolor: 'transparent',
        route: '/support/faq',
      },
    ],
  },
  {
    displayName: 'Settings',
    iconName: 'settings',
    bgcolor: 'light',
    route: '/settings',
    children: [
      {
        displayName: 'Admin Profile',
        iconName: 'admin_panel_settings',
        bgcolor: 'transparent',
        route: '/settings/profile',
      },
      {
        displayName: 'Security',
        iconName: 'security',
        bgcolor: 'transparent',
        route: '/settings/security',
      },
      {
        displayName: 'Notifications',
        iconName: 'notifications_active',
        bgcolor: 'transparent',
        route: '/settings/notifications',
      },
    ],
  },
];
