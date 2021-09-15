import React from 'react';
import ReactDOM from 'react-dom';


import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Routes from 'routes';
import  store  from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <Provider store={store}>
        <Routes />
      </Provider>
      </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

