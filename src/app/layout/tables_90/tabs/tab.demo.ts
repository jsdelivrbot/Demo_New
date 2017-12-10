/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'tabs-demo',
  templateUrl: 'tabs.demo.html',
  //styleUrls: ['tabs-demo.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class TabsDemo {
  // Nav bar demo
  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
        {
            label: 'Product 1',
            link: './tabs/product1',
            index: 0
        }, {
            label: 'Product 2',
            link: './product2',
            index: 1
        }, {
            label: 'Product 3',
            link: './product3',
            index: 2
        }, {
            label: 'Product 4',
            link: './product4',
            index: 3
        }, {
            label: 'Product 5',
            link: './product5',
            index: 4
        }
    ];
}

  
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
}

tabLinks = [
    {label: 'Sun', link: '/sunny-tab', index: 0},
    {label: 'Rain', link: '/rainy-tab', index: 1},
    {label: 'Fog', link: '/foggy-tab', index: 3},
  ];
}


@Component({
  moduleId: module.id,
  selector: 'sunny-routed-content',
  template: 'This is the routed body of the sunny tab.',
})
export class SunnyTabContent {}


@Component({
  moduleId: module.id,
  selector: 'rainy-routed-content',
  template: 'This is the routed body of the rainy tab.',
})
export class RainyTabContent {}


@Component({
  moduleId: module.id,
  selector: 'foggy-routed-content',
  template: 'This is the routed body of the foggy tab.',
})
export class FoggyTabContent {}
