import React from 'react';
import { List, Create, DateInput, Edit, SimpleForm, TextInput, Datagrid, TextField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.number}"` : ''}</span>;
};

export const VideosList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="number" />
            <TextField source="url" />
            <TextField source="description"/>
        </Datagrid>
    </List>
);

export const VideoEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="url" />
            <TextInput source="number" />
            <TextInput source="description" options={{ multiline: true }}/>
        </SimpleForm>
    </Edit>
);

export const VideoPost = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="url" />
            <TextInput source="number" />
            <TextInput source="description" options={{ multiline: true }}/>
        </SimpleForm>
    </Create>
);