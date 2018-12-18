import React from 'react';
import { List, Edit, SimpleForm, TextInput, Datagrid, TextField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.id}"` : ''}</span>;
};

export const VideosList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="description" />
            <TextField source="url" />
        </Datagrid>
    </List>
);

export const VideoEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="description" />
            <TextInput source="url" />
        </SimpleForm>
    </Edit>
);