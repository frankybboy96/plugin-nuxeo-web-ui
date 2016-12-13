'use strict';

export default class Drawer {

  constructor(selector) {
    const drawer = driver.element(selector);
    this.menu = drawer.element('#menu');
    this.pages = drawer.element('iron-pages');
    this.logo =  drawer.element('paper-icon-button.logo');
  }

  get browser() {
    return this._section('browser');
  }

  get search() {
    return this._section('search');
  }

  get administration() {
    return this._section('administration');
  }

  get recents() {
    return this._section('recents');
  }

  get tasks() {
    return this._section('tasks');
  }

  get favorites() {
    return this._section('favorites');
  }

  get collections() {
    return this._section('collections');
  }

  get personal() {
    return this._section('personalWorkspace');
  }

  get profile() {
    return this._section('profile');
  }

  selectSearch(name) {
    this.menu.click(`nuxeo-menu-icon[name='${name}Search']`);
    this._section('search').waitForVisible(2000);
  }

  select(name) {
    this.menu.click(`nuxeo-menu-icon[name='${name}']`);
    this._section(name).waitForVisible();
  }

  _section(name) {
    return this.pages.element(`[name='${name}']`);
  }
}
