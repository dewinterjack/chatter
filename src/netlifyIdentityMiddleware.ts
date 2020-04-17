import * as NetlifyIdentityWidget from "netlify-identity-widget";
import * as actions from "./store/system/actions";

export {}
declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

window.netlifyIdentity = NetlifyIdentityWidget;
NetlifyIdentityWidget.init();

function configureIdentity(store: any){
    NetlifyIdentityWidget.on('login', user => store.dispatch(actions.login(user.user_metadata.full_name)))
}

export default configureIdentity;