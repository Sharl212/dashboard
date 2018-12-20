import React from 'react';
import { List, Create, DateInput, Edit, SimpleForm, TextInput, Datagrid, TextField } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.number}"` : ''}</span>;
};

export const PostsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="number" />
            <TextField source="url" />
            <TextField source="title" />
            <TextField source="description"/>
            <TextField source="createdAt"/>
        </Datagrid>
    </List>
);

export const PostsEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput source="number" />
            <TextInput source="url" />
            <TextInput source="title" />
            <TextInput source="description" options={{ multiline: true }}/>
        </SimpleForm>
    </Edit>
);

export const NewPost = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="number" />
            <TextInput source="url" />
            <TextInput source="title" />
            <TextInput source="description" options={{ multiline: true }}/>
        </SimpleForm>
    </Create>
);