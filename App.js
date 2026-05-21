// Importação para o lateral funcionar
import 'react-native-gesture-handler';

// Importat o container da navegação (controla todas telas do app)
import { NavigationContainer } from '@react-navigation/native';

// Importar menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar telas
import Jogador1 from './components/Jogador1';
import Jogador2 from './components/Jogador2';
import Jogador3 from './components/Jogador3';
import Jogador4 from './components/Jogador4';

// Criar Drawer
const Drawer = createDrawerNavigator();

// Componente principal do APP
export default function APP() {
  return ( // O que está dentro do return aparece na tela
    <NavigationContainer /* Container principal da navegação */>
      <Drawer.Navigator /* Mneu lateral */>
        <Drawer.Screen /* Tela do Jogador1 */
          name="Modo Solo" // Nome que aparece no Menu
          component={Jogador1} // Componente que será aberto
        />
        <Drawer.Screen /* Tela do Jogador2 */
          name="Modo Multiplayer: Dois Jogadores" // Nome que aparece no Menu
          component={Jogador2} // Componente que será aberto
        />
        <Drawer.Screen /* Tela do Jogador3 */
          name="Modo Multiplayer: Três Jogadores" // Nome que aparece no Menu
          component={Jogador3} // Componente que será aberto
        />
        <Drawer.Screen /* Tela do Jogador4 */
          name="Modo Multiplayer: Quatro Jogadores" // Nome que aparece no Menu
          component={Jogador4} // Componente que será aberto
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );

}
