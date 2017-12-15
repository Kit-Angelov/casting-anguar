import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from "@angular/router";

import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MainComponent } from "./main/main.component";
import { RegComponent } from "./components/reg/reg.component";
import { AuthComponent } from "./components/auth/auth.component";
import { TestimgComponent } from "./components/testimg/testimg.component";
//
import { HttpClientModule }   from '@angular/common/http';
import {ParametersComponent} from "./components/parameters/parameters.component";
import {HomeComponent} from "./components/home/home.component";
import {EmployeeComponent} from "./employee/employee.component";
import {EmployerComponent} from "./employer/employer.component";
import {RoleListComponent} from "./components/role-list/role-list.component";
import {RequestListComponent} from "./components/request-list/request-list.component";
import {InvaiteListComponent} from "./components/invaite-list/invaite-list.component";
import {Req_inv_employeeComponent} from "./components/req_inv_employee/req_inv_employee.component";
import {EmployeeProfileComponent} from "./components/employee-profile/employee-profile.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {CastingListComponent} from "./components/casting-list/casting-list.component";
import {CastingDetailComponent} from "./components/casting-detail/casting-detail.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {EmployeeDetailComponent} from "./components/employee-detail/employee-detail.component";
import {CastingListAcitveComponent} from "./components/casting-list-active/casting-list-active.component";
import {CastingListCompliteComponent} from "./components/casting-list-complite/casting-list-complite.component";
import {InviteComponent} from "./components/invite/invite.component";
import {InviteCreateDetailComponent} from "./components/invate-create-detail/invite-create-detail.component";
//

const casting_listRoutes: Routes = [
    { path: '', redirectTo: 'active', pathMatch: 'full'},
    { path: 'active', component: CastingListAcitveComponent},
    { path: 'complite', component: CastingListCompliteComponent},
];
//
const req_invRoutes: Routes = [
    { path: 'requests', component: RequestListComponent},
    { path: '', redirectTo: 'requests', pathMatch: 'full'},
    { path: 'invites', component: InvaiteListComponent}
];

const employeeRoutes: Routes = [
    { path: '', redirectTo: 'role_list', pathMatch: 'full'},
    { path: 'role_list', component: RoleListComponent},
    { path: 'req_inv', component: Req_inv_employeeComponent, children: req_invRoutes},
    { path: 'profile', component: EmployeeProfileComponent},
];

const employerRoutes: Routes = [
    { path: '', redirectTo: 'casting_list', pathMatch: 'full'},
    { path: 'casting_list', component: CastingListComponent, children: casting_listRoutes},
    { path: 'inv_req', component: Req_inv_employeeComponent, children: req_invRoutes},
    { path: 'profile', component: RegComponent},
    { path: 'employees', component: EmployeeListComponent},
    { path: 'employeeDetail/:id', component: EmployeeDetailComponent},
    { path: 'inviteDetail/:id', component: InviteCreateDetailComponent},
    { path: 'castingDetail/:id', component: CastingDetailComponent},
];

const appRoutes: Routes =[
    { path: '', component: MainComponent},
    { path: 'reg/:state', component: RegComponent},
    { path: 'auth', component: AuthComponent},
    { path: 'employee', component: EmployeeComponent, children: employeeRoutes},
    { path: 'employer', component: EmployerComponent, children: employerRoutes},
    { path: 'logout', component: LogoutComponent},
];


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), CommonModule],
    declarations: [ AppComponent,
        MainComponent,
        RegComponent,
        ParametersComponent,
        AuthComponent,
        TestimgComponent,
        HomeComponent,
        EmployeeComponent,
        EmployerComponent,
        RoleListComponent,
        Req_inv_employeeComponent,
        RequestListComponent,
        InvaiteListComponent,
        EmployeeProfileComponent,
        LogoutComponent,
        CastingListComponent,
        CastingDetailComponent,
        EmployeeListComponent,
        ContactsComponent,
        EmployeeDetailComponent,
        CastingListAcitveComponent,
        CastingListCompliteComponent,
        InviteComponent,
        InviteCreateDetailComponent
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }