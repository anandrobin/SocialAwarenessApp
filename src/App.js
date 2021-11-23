import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import AdminLogin from './AdminLogin';

import { firebaseConfig as config } from './FIREBASE_CONFIG';


const options = {
  logging: true,
  rootRef: 'root_collection/some_document'
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={AdminLogin} 
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="posts"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />
        
      </Admin>
    );
  }
}

export default App;
