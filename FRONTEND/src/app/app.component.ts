import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavLink } from './interfaces/interfaces';
import { NavService } from './services/nav-service.service';
import {MediaMatcher} from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  navLinks: NavLink[] | undefined;
  mobileQuery: MediaQueryList;
  opened: boolean = true;
  private _mobileQueryListener: () => void;

  constructor(
    private navService: NavService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.navLinks = this.navService.getNavLinks();
  }
}
