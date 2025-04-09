// styles/global.ts
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #0d0e14; // 更暗的背景
    --neon-blue: #7dcfff;
    --neon-purple: #bb9af7;
    --neon-pink: #ff7b9c; // 新增霓虹粉色
    --text-primary: #c0caf5;
    --gradient: linear-gradient(45deg, #7dcfff, #bb9af7, #ff7b9c);
  }

  body {
    background: var(--bg-color);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(123, 207, 255, 0.03) 0%, transparent 20%),
      radial-gradient(circle at 90% 80%, rgba(187, 154, 247, 0.03) 0%, transparent 20%);
    min-height: 100vh;
  }
  
  ::selection {
    background: rgba(187, 154, 247, 0.3);
  }
  
  /* 自定义滚动条，增强主题感 */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(15, 16, 23, 0.8);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #7dcfff, #bb9af7);
    border-radius: 4px;
  }
`