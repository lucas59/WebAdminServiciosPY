import React from 'react'
import { Admin, Resource, fetchUtils } from 'react-admin';
import "./App.css"

import { ClientList, ClientEdit, ClientCreate, ClientIcon } from './Tabs/Clients/Clients';
import { StoreList, StoreEdit, StoreCreate, StoreIcon } from './Tabs/Stores/Stores';
import { TagsCreate, TagsEdit, TagsList, TagsIcon } from './Tabs/Tags/Tags'
import authProvider from './Api/Auth';
import restProvider from 'ra-data-simple-rest';
import '../src/Styles/Login.css';

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
        <Admin authProvider={authProvider} dataProvider={restProvider(process.env.BACKEND_URL, httpClient)}>
            <Resource name="store" list={StoreList} edit={StoreEdit} create={StoreCreate} icon={StoreIcon} options={{ label: "Tiendas" }} />
            <Resource name="tag" list={TagsList} edit={TagsEdit} create={TagsCreate} icon={TagsIcon} options={{ label: "Tags" }} />
        </Admin>
    )
} 
