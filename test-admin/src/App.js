import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';

import { VideosList, VideoEdit } from "./videos"

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="videos" list={VideosList} edit={VideoEdit}/>
    </Admin>
)

export default App;