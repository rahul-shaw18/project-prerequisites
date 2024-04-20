import { Component } from '@angular/core';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { WorkspaceComponent } from "../workspace/workspace.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [SidenavComponent, WorkspaceComponent]
})
export class LayoutComponent {

}
