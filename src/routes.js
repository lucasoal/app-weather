// controle de rotas do apk... menus e abas

import React from 'react'; // importando a biblioteca do react
import { createDrawerNavigator } from '@react-navigation/drawer'; // aba de navegação lateral

// importa as páginas para o routes fazer a manipulação
import Home from './pages/Home';
import Search from './pages/Search';

// criando o tipo de navegação em Drawer
const Drawer = createDrawerNavigator();

// criando funcção de routes
function Routes() {

    return (
        // barra de navegação Drawer
        <Drawer.Navigator>
            {/* TELA DE NAVEGAÇÃO DO DROWER */}
            <Drawer.Screen
                name="Home" //Nome da tela de navegação
                component={Home} // Componente relacionado a ela
                options={{
                    title: 'Minha cidade'
                }}
            />

            <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Procurar'
                }}
            />
        </Drawer.Navigator>
    )
}

// exportar para possibilitar ser utilizado em outro arquivo
export default Routes;