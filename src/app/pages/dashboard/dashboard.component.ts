import { Component, OnInit, Injectable } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';

const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Fruit',
    expandable: true,
    level: 0,
  }, {
    name: 'Apple',
    expandable: false,
    level: 1,
  }, {
    name: 'Banana',
    expandable: false,
    level: 1,
  }, {
    name: 'Fruit loops',
    expandable: false,
    level: 1,
  }, {
    name: 'Vegetables',
    expandable: true,
    level: 0,
  }, {
    name: 'Green',
    expandable: true,
    level: 1,
  }, {
    name: 'Broccoli',
    expandable: false,
    level: 2,
  }, {
    name: 'Brussel sprouts',
    expandable: false,
    level: 2,
  }, {
    name: 'Orange',
    expandable: true,
    level: 1,
  }, {
    name: 'Pumpkins',
    expandable: false,
    level: 2,
  }, {
    name: 'Carrots',
    expandable: false,
    level: 2,
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

    dataSource = new ArrayDataSource(TREE_DATA);

    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
    
    constructor() {
    }
  
    ngOnInit() {
    }

    
    getParentNode(node: ExampleFlatNode) {
      const nodeIndex = TREE_DATA.indexOf(node);

      for (let i = nodeIndex - 1; i >= 0; i--) {
        if (TREE_DATA[i].level === node.level - 1) {
          return TREE_DATA[i];
        }
      }

      return null;
    }

    shouldRender(node: ExampleFlatNode) {
      const parent = this.getParentNode(node);
      return !parent || parent.isExpanded;
    }
  }
 

