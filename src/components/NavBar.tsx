// components/NavBar.tsx
import { FaGlassMartiniAlt } from 'react-icons/fa'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(15, 16, 23, 0.85); // 更暗的背景色
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(157, 94, 255, 0.2); // 更鲜明的边框
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(123, 97, 255, 0.15); // 添加霓虹光晕效果
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #ff7b9c, #7dcfff, #bb9af7); // 更丰富的渐变
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 5px rgba(123, 207, 255, 0.5); // 文字发光效果
  
  svg {
    filter: drop-shadow(0 0 8px rgba(123, 207, 255, 0.8));
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(15deg);
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    position: relative;
    padding: 0.3rem 0;
    
    &:hover {
      color: #7dcfff;
      text-shadow: 0 0 8px rgba(123, 207, 255, 0.5);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(to right, #7dcfff, #bb9af7);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`

export default function NavBar() {
    return (
        <Nav>
            <NavContent>
                <Title>
                    <FaGlassMartiniAlt />
                    Scholar Bar
                </Title>
                <NavLinks>
                    <a href="#menu">酒单</a>
                    <a href="#special">特调</a>
                    <a href="#about">关于</a>
                </NavLinks>
            </NavContent>
        </Nav>
    )
}