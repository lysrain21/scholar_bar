// components/CocktailList.tsx
import styled from 'styled-components'
import CocktailCard from './CocktailCard'
import { cocktails } from '../data/cocktails.ts'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

export default function CocktailList() {
    return (
        <Grid>
            {cocktails.map(cocktail => (
                <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))}
        </Grid>
    )
}

console.log("渲染的鸡尾酒数据:", cocktails);
// 添加更多鸡尾酒数据...