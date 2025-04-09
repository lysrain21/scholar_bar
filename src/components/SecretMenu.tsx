import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { secretCocktails } from '../data/cocktails.ts'
import CocktailCard from './CocktailCard.tsx'
import { FaKey } from 'react-icons/fa' // 导入钥匙图标

// 更醒目的神秘触发器 - 霓虹风格的隐藏菜单按钮
const SecretTrigger = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  background: rgba(26, 27, 38, 0.8);
  box-shadow: 0 0 15px rgba(187, 154, 247, 0.5),
              inset 0 0 8px rgba(123, 207, 255, 0.5);
  animation: pulseGlow 3s infinite alternate ease-in-out;
  border: 1px solid rgba(123, 207, 255, 0.3);
  
  svg {
    color: var(--neon-purple);
    font-size: 1.2rem;
    filter: drop-shadow(0 0 3px var(--neon-blue));
    opacity: 0.8;
    transition: all 0.3s ease;
  }
  
  &::after {
    content: "?";
    position: absolute;
    color: var(--neon-pink);
    font-size: 1rem;
    font-weight: bold;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(187, 154, 247, 0.7),
                inset 0 0 12px rgba(123, 207, 255, 0.7);
    
    svg {
      opacity: 1;
      transform: rotate(45deg);
    }
    
    &::after {
      opacity: 0.8;
      transform: translateX(-15px);
    }
  }
  
  @keyframes pulseGlow {
    0% { box-shadow: 0 0 10px rgba(187, 154, 247, 0.3), 
                     inset 0 0 5px rgba(123, 207, 255, 0.3); }
    100% { box-shadow: 0 0 20px rgba(187, 154, 247, 0.6), 
                       inset 0 0 10px rgba(123, 207, 255, 0.6); }
  }
`

// 添加提示文字
const SecretHint = styled.div`
  position: fixed;
  right: 90px;
  bottom: 45px;
  background: rgba(26, 27, 38, 0.9);
  padding: 8px 15px;
  border-radius: 8px;
  pointer-events: none;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
  font-style: italic;
  font-size: 0.9rem;
  border: 1px solid rgba(123, 207, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px rgba(187, 154, 247, 0.4);
  
  ${SecretTrigger}:hover + & {
    opacity: 1;
    transform: translateX(0);
  }
`

const SecretSection = styled.section<{ visible: boolean }>`
  max-height: ${props => props.visible ? '2000px' : '0'};
  opacity: ${props => props.visible ? '1' : '0'};
  overflow: hidden;
  transition: max-height 1.5s ease-in-out, opacity 1s ease-in-out;
  margin-top: ${props => props.visible ? '3rem' : '0'};
  position: relative;
`

const SecretHeader = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 2px;
    background: var(--gradient);
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, var(--neon-pink), var(--neon-purple), var(--neon-blue));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textGlow 2s infinite alternate;
  }
  
  p {
    color: rgba(255, 255, 255, 0.6);
    font-style: italic;
  }
`

const SecretGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

export default function SecretMenu() {
    const [_secretCode, setSecretCode] = useState<string[]>([]);
    const [menuVisible, setMenuVisible] = useState(false);
    const validCode = ['s', 'c', 'h', 'o', 'l', 'a', 'r'];

    // 监听键盘输入，检查是否输入了正确的密码
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            setSecretCode(prev => {
                const newCode = [...prev, e.key].slice(-validCode.length);

                // 检查密码是否匹配
                if (newCode.join('') === validCode.join('')) {
                    setMenuVisible(true);
                    return [];
                }

                return newCode;
            });
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    // 神秘触发器也可以打开隐藏菜单
    const handleSecretTriggerClick = () => {
        setMenuVisible(true);
    };

    return (
        <>
            <SecretTrigger onClick={handleSecretTriggerClick}>
                <FaKey />
            </SecretTrigger>
            <SecretHint>发现秘密菜单...</SecretHint>
            <SecretSection visible={menuVisible} id="secret-menu">
                <SecretHeader>
                    <h2>隐藏菜单</h2>
                    <p>只为真正的鉴赏家准备...</p>
                </SecretHeader>
                <SecretGrid>
                    {secretCocktails.map(cocktail => (
                        <CocktailCard key={cocktail.id} cocktail={cocktail} />
                    ))}
                </SecretGrid>
            </SecretSection>
        </>
    );
}