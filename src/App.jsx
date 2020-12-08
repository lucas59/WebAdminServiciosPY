import React from 'react'
import { Admin, Resource, fetchUtils } from 'react-admin';
import "./App.css"
import { PostList, PostEdit, PostCreate, PostIcon } from './Tabs/Posts/Posts';
import { UserList, UserEdit, UserCreate, UserIcon } from './Tabs/Users/Users';
import { ClientList, ClientEdit, ClientCreate, ClientIcon } from './Tabs/Clients/Clients';
import { StoreList, StoreEdit, StoreCreate, StoreIcon } from './Tabs/Stores/Stores';
import authProvider from './Api/Auth';
import restProvider from 'ra-data-simple-rest';
import MyLoginPage from './Views/Login';

export default function App() {
    const httpClient = (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const token = localStorage.getItem('token');
        options.headers.set('Authorization', `Bearer ${token}`);
        options.headers.set('X-Custom-Header', 'foobar');
        return fetchUtils.fetchJson(url, options);
    }
    return (
        <Admin authProvider={authProvider} dataProvider={restProvider('http://localhost:8000', httpClient)}>
            {/*} <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} options={{ label: "Usuarios" }} />*/}
            <Resource name="client" list={ClientList} edit={ClientEdit} create={ClientCreate} icon={ClientIcon} options={{ label: "Usuarios" }} />
            <Resource name="store" list={StoreList} edit={StoreEdit} create={StoreCreate} icon={StoreIcon} options={{ label: "Tiendas" }} />
        </Admin>
    )
} 
