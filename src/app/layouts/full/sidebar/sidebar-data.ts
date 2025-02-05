import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
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

  

  {
    navCap: 'Users & Vehicles',
  },
  {
    displayName: 'Users',
    iconName: 'people',
    bgcolor: 'info',
    route: '/users',
    children: [
      {
        displayName: 'Users List',
        iconName: 'format_list_bulleted',
        bgcolor: 'transparent',
        route: '/users/list',
      },
      {
        displayName: 'Profiles',
        iconName: 'account_circle',
        bgcolor: 'transparent',
        route: '/users/profiles',
      },
      {
        displayName: 'Account Verification',
        iconName: 'verified_user',
        bgcolor: 'transparent',
        route: '/users/verification',
      },
    ],
  },
  {
    displayName: 'Vehicles',
    iconName: 'directions_car_filled',
    bgcolor: 'warning',
    route: '/vehicles',
    children: [
      {
        displayName: 'Vehicles List',
        iconName: 'list_alt',
        bgcolor: 'transparent',
        route: '/vehicles/list',
      },
      {
        displayName: 'Add a Vehicle',
        iconName: 'add_circle',
        bgcolor: 'transparent',
        route: '/vehicles/add',
      },
      {
        displayName: 'Maintenance',
        iconName: 'build',
        bgcolor: 'transparent',
        route: '/vehicles/maintenance',
      },
    ],
  },

  {
    navCap: 'Reservations & Payments',
  },
  {
    displayName: 'Reservations',
    iconName: 'book_online',
    bgcolor: 'danger',
    route: '/reservations',
    children: [
      {
        displayName: 'Pending Reservations',
        iconName: 'pending_actions',
        bgcolor: 'transparent',
        route: '/reservations/pending',
      },
      {
        displayName: 'Confirmed Reservations',
        iconName: 'check_circle',
        bgcolor: 'transparent',
        route: '/reservations/confirmed',
      },
      {
        displayName: 'History',
        iconName: 'history',
        bgcolor: 'transparent',
        route: '/reservations/history',
      },
    ],
  },
  {
    displayName: 'Payments',
    iconName: 'payment',
    bgcolor: 'dark',
    route: '/payments',
    children: [
      {
        displayName: 'Transactions',
        iconName: 'receipt_long',
        bgcolor: 'transparent',
        route: '/payments/transactions',
      },
      {
        displayName: 'Invoices',
        iconName: 'request_quote',
        bgcolor: 'transparent',
        route: '/payments/invoices',
      },
      {
        displayName: 'Payment Methods',
        iconName: 'credit_card',
        bgcolor: 'transparent',
        route: '/payments/methods',
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
