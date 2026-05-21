// Importação para o lateral funcionar
import 'react-native-gesture-handler';

// Importat o container da navegação (controla todas telas do app)
import { NavigationContainer } from '@react-navigation/native';

// Importar menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar telas
import Jogador1 from './components/Jogador1';

// Criar Drawer
const Drawer = createDrawerNavigator();

// Componente principal do APP
export default function APP() {
  return ( // O que está dentro do return aparece na tela
    <NavigationContainer /* Container principal da navegação */>
      <Drawer.Navigator /* Mneu lateral */>
        <Drawer.Screen /* Tela do Jogador1 */
          name="1 Jogador" // Nome que aparece no Menu
          component={Jogador1} // Componente que será aberto
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );

}
