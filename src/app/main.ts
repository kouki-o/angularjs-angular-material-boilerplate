import Foo from './foo';
import 'angular';
import 'angular-material';

var app = angular.module('DemoApp', ["ngMaterial"]);

class Main {
  constructor() {
    this.foo = new Foo();
    this.textNode = document.createTextNode(this.foo.doSomething());
  }

  writeText() {
    document.body.appendChild(this.textNode);
  }
}

new Main().writeText();  
export var hello = 'es6';
