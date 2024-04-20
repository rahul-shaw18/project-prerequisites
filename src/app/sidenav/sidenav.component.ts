import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  isSidenavOpen: boolean = true;

  sidenavList = [
    { id: 1, label:'', childred: [{id:1.1, icon: 'icon-home', name: 'Dashboard', isSelcted: false } ]},
    {
      id: 2,
      label: 'People',
      childred: [
        { id: 2.1, icon: 'icon-home', name: 'Team', isSelcted: false },
        { id: 2.2, icon: 'icon-home', name: 'Onboarding', isSelcted: false  },
        { id: 2.3, icon: 'icon-home', name: 'Talent', isSelcted: false },
      ],
    },
    {
      id: 3,
      label: 'Management',
      childred: [
        { id: 3.1, icon: 'icon-home', name: 'Time Off', isSelcted: false },
        { id: 3.2, icon: 'icon-home', name: 'Time Tracking', isSelcted: false },
        { id: 3.3, icon: 'icon-home', name: 'Expenses', isSelcted: false },
        { id: 3.4, icon: 'icon-home', name: 'Incentives', isSelcted: false },
        { id: 3.5, icon: 'icon-home', name: 'Benefits', isSelcted: false },
        { id: 3.6, icon: 'icon-home', name: 'Compensation', isSelcted: false },
        { id: 3.7, icon: 'icon-home', name: 'Cost Calculator', isSelcted: false },
        { id: 3.8, icon: 'icon-home', name: 'Feedback', isSelcted: false },
      ],
    },
    {
      id: 4,
      label: 'Payroll',
      childred: [
        { id: 4.1, icon: 'icon-home', name: 'Payroll', isSelcted: false },
        
      ],
    },
   
  ];


}
