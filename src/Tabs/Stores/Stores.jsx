import * as React from "react";
import { SimpleFormIterator, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, BooleanField, ImageField, BooleanInput, ImageInput, ArrayInput, SelectInput } from 'react-admin';
import ShopIcon from '@material-ui/icons/Store';
export const StoreIcon = ShopIcon;

export const StoreList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="Nombre" />
            <TextField source="user.email" label="Correo" />
            <TextField source="type" label="Estado" />
            <TextField source="phone" label="Cel" />
            <TextField source="description" label="Descpripción" />
            <DateField source="user.createdAt" label="Creado" />
            <EditButton basePath="/store" />
        </Datagrid>
    </List>
);

const StoreTitle = ({ record }) => {
    return <span>Store {record ? `"${record.title}"` : ''}</span>;
};

export const StoreEdit = (props) => (
    <Edit title={<StoreTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="name" />
            <TextInput multiline source="description" />
        </SimpleForm>
    </Edit>
);

export const StoreCreate = (props) => (
    <Create title="Nuevo comercio" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nombre" />
            <TextInput source="email" type="email" label="Correo" />
            <TextInput source="password" type="password" label="Contraseña" />
            <TextInput source="phone" label="Cel" />
            <TextInput source="description" label="Descripción" />
            <TextInput source="address" label="Dirección" />
            <TextInput source="locality" label="Localidad" />

            <TextInput type="number" source="latitude" label="Latitud" />
            <TextInput type="number" source="longitude" label="Longitud" />

            <TextInput type="number" source="tagId" label="Tag" />
    
        </SimpleForm>
    </Create>
);