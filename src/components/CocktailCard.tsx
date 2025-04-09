// components/CocktailCard.tsx
import styled from 'styled-components'

interface Cocktail {
    id: number
    name: string
    price: number
    description: string
    image: string
}

const Card = styled.article`
  background: rgba(26, 27, 38, 0.6);
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    
    &::after {
      opacity: 0.1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`

const Price = styled.span`
  background: var(--gradient);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
`

export default function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
    return (
        <Card>
            <Image src={cocktail.image} alt={cocktail.name} />
            <h3>{cocktail.name}</h3>
            <p>{cocktail.description}</p>
            <Price>¥{cocktail.price}</Price>
        </Card>
    )
}