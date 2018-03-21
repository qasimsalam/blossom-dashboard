import { observable, action } from "mobx";
import axios from "axios";

export default class LoginState {

  @observable isUserLoggedIn;
  constructor() {
    this.isUserLoggedIn = false;
    this.testval = "Cobbled together by ";
  }

}
