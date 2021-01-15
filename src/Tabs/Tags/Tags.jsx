import * as React from "react";
import { SimpleFormIterator, List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, BooleanField, ImageField, BooleanInput, ImageInput, ArrayInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import ShopIcon from '@material-ui/icons/Store';
export const TagsIcon = ShopIcon;

export const TagsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Titulo" />
            <TextField source="icon" label="Icono" />
            <DateField source="user.createdAt" label="Creado" />
            <EditButton basePath="/tag" />
        </Datagrid>
    </List>
);

const TagsTitle = ({ record }) => {
    return <span>Tag {record ? `"${record.title}"` : ''}</span>;
};

export const TagsEdit = (props) => (
    <Edit title={<TagsTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" label="Titulo" />
            <TextInput source="icon" label="Icono" />
        </SimpleForm>
    </Edit>
);

export const TagsCreate = (props) => (
    <Create title="Nuevo servicio" {...props}>
        <SimpleForm>
            <TextInput source="title" label="Titulo" />
            <TextInput source="icon" label="Icono" />
        </SimpleForm>
    </Create>
);