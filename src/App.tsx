// App.tsx
import styled from 'styled-components'
import { GlobalStyle } from './styles/global.ts'
import CocktailList from './components/CocktailList.tsx'
import NavBar from './components/NavBar.tsx'
import SecretMenu from './components/SecretMenu.tsx'  // 导入隐藏菜单组件

const AppContainer = styled.div`
  padding-top: 70px; // 给导航栏腾出空间
  width: 100%;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AppContainer>
        <CocktailList />
        <SecretMenu />  {/* 添加隐藏菜单 */}
      </AppContainer>
    </>
  )
}

export default App