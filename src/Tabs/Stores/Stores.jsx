import * as React from "react";
import { SimpleFormIterator, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, BooleanField, ImageField, BooleanInput, ImageInput, ArrayInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import ShopIcon from '@material-ui/icons/Store';
export const StoreIcon = ShopIcon;

export const StoreList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" label="Nombre" />
            <TextField source="email" label="Correo" />
            <TextField source="type" label="Estado" />
            <TextField source="phone" label="Cel" />
            <TextField source="description" label="Descpripción" />
            <DateField source="user.createdAt" label="Creado" />
            <EditButton basePath="/Stores" />
        </Datagrid>
    </List>
);

const StoreTitle = ({ record }) => {
    return <span>Store {record ? `"${record.title}"` : ''}</span>;
};

export const StoreEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput multiline source="description" />
            <DateInput label="Publication date" source="published_at" />
            <TextInput source="average_note" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const StoreCreate = (props) => (
    <Create title="Nuevo servicio" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nombre" />
            <TextInput source="email" type="email" label="Correo" />
            <TextInput source="password" type="password" label="Contraseña" />
            <TextInput source="phone" label="Cel" />
            <BooleanInput label="Subscripto" source="subscribed" />

            <RichTextInput source="body" />
            
            <ImageInput source="pictures" label="Foto de perfíl" accept="image/*" placeholder={<p>Arrastre y suelte la imagen a este cuadro</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput source="pictures" label="Foto de portada" accept="image/*" placeholder={<p>Arrastre y suelte la imagen a este cuadro</p>}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);